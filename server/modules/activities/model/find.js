import { query } from '../../../database';

const findActivityById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

const findActivitiesBySkillId = async (id) => {
  const values = [id];
  const sql = `
    SELECT
      a.id,
      a.title
    FROM activities_skills AS a_s
    INNER JOIN activities AS a ON(a_s.activity = a.id)
    WHERE a_s.skill = $1
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findCompletedActivitiesByActivityId = async ({ userId, activityId }) => {
  const values = [activityId, userId];
  const sql = `
  SELECT a_s.skill, a_s.activity, u_a_u.user, s.title,
  (SELECT COUNT(DISTINCT a_s2.id) 
    FROM activities_skills a_s2 
    WHERE a_s2.skill = a_s.skill) 
    AS total_activities, 
  (SELECT COUNT(DISTINCT a_s3.id) 
    FROM activities_skills a_s3
    INNER JOIN users_completed_activities u_a_u2 ON (a_s3.activity = u_a_u2.activity) 
    WHERE a_s3.skill = a_s.skill)
    AS completed_activities
  FROM activities_skills a_s 
  LEFT JOIN users_completed_activities u_a_u ON (u_a_u.activity = a_s.activity)
  INNER JOIN skills s ON (s.id = a_s.skill)
  WHERE a_s.activity = $1 AND u_a_u.user = $2`;
  const res = await query(sql, values);
  return res.rows;
};

const findActivitiesBySkillIdForVolunteer = async ({ id, userId }) => {
  const values = [userId, id];
  const sql = `
    SELECT
      a.id,
      a.title,
      a.difficulty,
      a.completion_time,
      CASE WHEN uca.id IS NULL THEN 'not_completed' ELSE 'completed' END AS status
    FROM activities_skills AS a_s
    INNER JOIN activities AS a ON(a_s.activity = a.id)
    LEFT JOIN users_completed_activities AS uca ON(uca.activity = a.id AND uca.user = $1)
    WHERE a_s.skill = $2
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findCompletedActivitysBySkillAndActivity = async ({
  userId,
  activityId,
  skillId,
}) => {
  const values = [activityId, skillId, userId];
  const sql = `
  SELECT a_s.skill, a_s.activity, u_a_u.user, s.title,
  (SELECT COUNT(DISTINCT a_s2.id) 
    FROM activities_skills a_s2 
    WHERE a_s2.skill = a_s.skill) 
    AS total_activities, 
  (SELECT COUNT(DISTINCT a_s3.id) 
    FROM activities_skills a_s3
    INNER JOIN users_completed_activities u_a_u2 ON (a_s3.activity = u_a_u2.activity) 
    WHERE a_s3.skill = a_s.skill)
    AS completed_activities
  FROM activities_skills a_s 
  LEFT JOIN users_completed_activities u_a_u ON (u_a_u.activity = a_s.activity)
  INNER JOIN skills s ON (s.id = a_s.skill)
  WHERE a_s.activity = $1 AND a_s.skill = $2 AND u_a_u.user = $3`;

  const res = await query(sql, values);
  return res.rows;
};

const findActivitiesBySkillIdForPublic = async (id) => {
  const values = [id];
  const sql = `
    SELECT
      a.id,
      a.title,
      a.difficulty,
      a.completion_time
    FROM activities_skills AS a_s
    INNER JOIN activities AS a ON(a_s.activity = a.id)
    WHERE a_s.skill = $1
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findRelatedActivitiesBySkill = async ({ skillId, activityId }) => {
  const values = [skillId, activityId];
  const sql = `
  SELECT a_s.skill, a_s.activity, a.title, a.difficulty, a.completion_time
  FROM activities_skills a_s 
  INNER JOIN activities a ON (a.id = a_s.activity)
  WHERE a_s.skill = $1 AND a_s.activity != $2;
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findRelatedActivitiesBySkillAndUser = async ({ skillId, userId }) => {
  const values = [userId, skillId];
  const sql = `
  SELECT a_s.skill, a_s.activity, a.title, a.difficulty, a.completion_time,
  (SELECT COUNT(DISTINCT u_c_a.id) FROM users_completed_activities u_c_a WHERE u_c_a.activity = a_s.activity AND u_c_a.user = $1) AS completed 
  FROM activities_skills a_s 
  INNER JOIN activities a ON (a.id = a_s.activity)
  LEFT JOIN users_completed_activities u_c_a ON (u_c_a.activity = a_s.activity)
  WHERE a_s.skill = $2;
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findRelatedActivitiesByUser = async ({ userId }) => {
  const values = [userId];
  const sql = `
  SELECT a.id, a.title, a.difficulty, a.completion_time, s_a_s.skill AS skill_id, s_a_s.skill_area AS skill_area_id, u_s_a.user,
  (SELECT COUNT(DISTINCT u_c_a.id) FROM users_completed_activities u_c_a WHERE u_c_a.activity = a.id AND u_c_a.user = u_s_a.user) AS completed
  FROM activities a 
  INNER JOIN activities_skills a_s ON (a.id = a_s.activity) 
  INNER JOIN skill_areas_skills s_a_s ON (s_a_s.skill = a_s.skill)
  INNER JOIN users_skill_areas u_s_a ON (u_s_a.skill_area = s_a_s.skill_area)
  WHERE u_s_a.user = $1;
  `;
  const res = await query(sql, values);
  return res.rows;
};

const findRelatedActivitiesBySkillAreasLinkedToSkill = async ({
  skillId,
  activityId,
}) => {
  const values = [skillId, activityId];

  const sql = `
  SELECT DISTINCT a_s.skill, a_s.activity, a.title, a.difficulty, a.completion_time, s_a_s.skill_area, s_a_s.skill
  FROM activities_skills a_s 
  INNER JOIN activities a ON (a.id = a_s.activity)
  INNER JOIN skill_areas_skills s_a_s ON (s_a_s.skill = $1)
  WHERE a_s.activity != $2;
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findCompletedActivitiesByUser = async ({ userId }) => {
  const values = [userId];

  const sql = `SELECT * FROM users_completed_activities WHERE "user" = $1`;

  const res = await query(sql, values);
  return res.rows;
};

const findCompletedActivityById = async ({ activityId, userId }) => {
  const values = [activityId, userId];

  const sql = `SELECT added_score FROM users_completed_activities WHERE activity = $1 AND "user" = $2`;

  const res = await query(sql, values);
  return res.rows[0];
};

export {
  findActivityById,
  findActivitiesBySkillId,
  findCompletedActivitiesByActivityId,
  findCompletedActivitysBySkillAndActivity,
  findRelatedActivitiesBySkill,
  findRelatedActivitiesBySkillAndUser,
  findRelatedActivitiesByUser,
  findRelatedActivitiesBySkillAreasLinkedToSkill,
  findCompletedActivitiesByUser,
  findCompletedActivityById,
  findActivitiesBySkillIdForVolunteer,
  findActivitiesBySkillIdForPublic,
};
