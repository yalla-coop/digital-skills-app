import { query } from '../../../database';
import { skillStatuses as sks } from '../../../constants';

const findSkillById = async (id) => {
  const values = [id];
  const sql = `
    SELECT
      id,
      title,
      description,
      tasks,
      icon
    FROM skills
    WHERE id = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findSkillByIdForVolunteerAndPublic = async (id) => {
  const values = [id];
  const sql = `
    SELECT
      id,
      title,
      description,
      tasks,
      ARRAY(
        SELECT
          title
        FROM skill_areas_skills as sas
        INNER JOIN skill_areas AS sa ON(sa.id = sas.skill_area)
        WHERE sas.skill = $1
      ) AS skill_areas
    FROM skills AS s
    WHERE id = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findSkillsByAreas = async (areas) => {
  const sql = `
  SELECT DISTINCT
  s.id, 
  s.title, 
  s.code,  
  ARRAY(
    SELECT a2.code 
    FROM skill_areas a2 
    INNER JOIN skill_areas_skills sas2 ON (a2.id = sas2.skill_area) 
    WHERE s.id = sas2.skill AND a2.code = ANY ($1)
    ) AS user_skill_areas,
  ARRAY(
    SELECT a2.code 
    FROM skill_areas a2 
    INNER JOIN skill_areas_skills sas2 ON (a2.id = sas2.skill_area) 
    WHERE s.id = sas2.skill
    ) AS skill_areas 
  FROM skills s 
  INNER JOIN skill_areas_skills sas ON (s.id = sas.skill) 
  INNER JOIN skill_areas a ON (a.id = sas.skill_area) 
  WHERE a.code = ANY ($1)`;

  const values = [areas];

  const res = await query(sql, values);
  return res.rows;
};

const findSkills = async () => {
  const sql = `
    SELECT
      id,
      title
    FROM skills
  `;
  const res = await query(sql);
  return res.rows;
};

const findSkillsByCodes = async (codes) => {
  const sql = `
  SELECT s.id FROM skills s WHERE s.code = ANY ($1)`;

  const values = [codes];

  const res = await query(sql, values);
  return res.rows;
};

const findHQSkillProgress = async (orgId) => {
  const values = [orgId, sks.COMPLETED];

  const sql = `
  SELECT
    COUNT(DISTINCT id) AS volunteers,
    COUNT(DISTINCT id)
      FILTER (WHERE status = $2) AS volunteers_completed_a_skill,
    COUNT(DISTINCT id)
      FILTER (WHERE user_activity_id IS NOT NULL) AS volunteers_completed_an_activity,
    COUNT(DISTINCT user_skill_id) AS completed_skills,
    COUNT(DISTINCT user_activity_id) AS completed_activities
  FROM (
    SELECT
        u.id,
        uca.activity,
        uca.activity::TEXT || uca.user::TEXT AS user_activity_id,
        us.status,
        us.skill::TEXT || us.user::TEXT AS user_skill_id
    FROM users AS u
    JOIN volunteers_organisations AS vo
      ON vo.volunteer = u.id
    LEFT JOIN users_skills AS us
      ON us."user" = u.id
    LEFT JOIN users_completed_activities AS uca
      ON uca."user" = u.id
    WHERE vo.organisation = $1
  ) AS stats
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findSkillAndActivitiesForSearch = async ({ tool, task }) => {
  const tasksArray = task.split(' ');

  const tasksQueryText = tasksArray
    .map((v, i) => `to_tsquery($${i + 2})`) // keep the first param ($1) for the "tool" and start form $2
    .join(' || '); // matches any word in the task

  const sql = `
    SELECT
      id,
      title,
      type
    FROM(
      SELECT id, title, description, 'skill' AS type, document
      FROM skills AS s
      WHERE s.document @@ (plainto_tsquery($1) && (${tasksQueryText}))
      UNION
      SELECT id, title, description, 'activity' AS type, document
      FROM activities AS a
      WHERE a.document @@ (plainto_tsquery($1) && (${tasksQueryText}))
    ) AS t
    ORDER BY ts_rank(
      document,
      (plainto_tsquery($1) && (${tasksQueryText}))
    )
    LIMIT 10
  `;

  const res = await query(sql, [tool, ...tasksArray]);
  return res.rows;
};

const getPopularSkills = async () => {
  const sql = `
    SELECT
      s.id,
      s.title,
      COUNT(us.id) AS popularity,
      'skill' AS type
    FROM skills AS s
    LEFT JOIN users_skills AS us ON(us.skill = s.id)
    GROUP BY us.id, s.id
    ORDER BY popularity DESC
    LIMIT 5
  `;

  const res = await query(sql, []);
  return res.rows;
};

const findVolunteerSkillsStats = async (id) => {
  const sql = `
    SELECT(
      SELECT
        COUNT(DISTINCT(sas.skill)) AS total_skills
      FROM users_skill_areas AS usa
      INNER JOIN skill_areas_skills as sas ON(usa.skill_area = sas.skill_area)
      WHERE usa."user" = $1
    ),
    (
      SELECT
        COUNT(DISTINCT(us.skill)) AS newly_completed
      FROM users_skills as us
      WHERE us."user" = $1 AND us.status = $2
    ),
    (
      SELECT
        COUNT(DISTINCT(us.skill)) AS already_has_skills
      FROM users_skills as us
      WHERE us."user" = $1 AND us.status = $3
    )
  `;

  const res = await query(sql, [id, sks.COMPLETED, sks.ALREADY_HAS]);
  return res.rows[0];
};

const findSkillsByActivity = async (activityId) => {
  const sql = `
  SELECT * FROM activities_skills a_s INNER JOIN skills s ON (a_s.skill = s.id) WHERE a_s.activity = $1;
  `;

  const res = await query(sql, [activityId]);
  return res.rows;
};
const findRecommendedSkillsForVolunteer = async ({ userId }) => {
  const values = [userId, sks.IN_PROGRESS, sks.COMPLETED, sks.ALREADY_HAS];
  const sql = `
    SELECT
      DISTINCT s.id,
      s.title,
      s.description,
      s.icon,
      (
        CASE us.status
          WHEN $2 THEN 'a'
          WHEN $3 THEN 'c'
          ELSE 'b'
        END
      ) AS weight,
      (
        SELECT
        jsonb_build_object(
          'total_activities', COUNT(a.id),
          'completed_activities', COUNT(uca.id),
          'difficulty', AVG(a.difficulty)
        ) AS activities
      FROM activities_skills AS a_s
      INNER JOIN activities AS a ON(a_s.activity = a.id)
      LEFT JOIN users_completed_activities AS uca ON(uca.activity = a.id AND uca.user = $1)
      WHERE a_s.skill = s.id
      ) AS activities
    FROM users_skill_areas AS usa
    INNER JOIN skill_areas_skills AS sas ON(usa.skill_area = sas.skill_area)
    INNER JOIN skills AS s ON(s.id = sas.skill)
    LEFT JOIN users_skills AS us ON(us.skill = sas.skill AND us.user = $1)
    WHERE usa.user = $1
      AND CASE
        WHEN us.id IS NOT NULL THEN us.status != $4
        ELSE TRUE
      END
    ORDER BY weight
  `;

  const res = await query(sql, values);
  return res.rows;
};

export {
  findSkillById,
  findHQSkillProgress,
  findSkillAndActivitiesForSearch,
  getPopularSkills,
  findSkillByIdForVolunteerAndPublic,
  findSkillsByAreas,
  findSkills,
  findVolunteerSkillsStats,
  findSkillsByActivity,
  findRecommendedSkillsForVolunteer,
  findSkillsByCodes,
};
