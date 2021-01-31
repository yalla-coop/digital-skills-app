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

export {
  findActivityById,
  findActivitiesBySkillId,
  findActivitiesBySkillIdForVolunteer,
  findActivitiesBySkillIdForPublic,
};
