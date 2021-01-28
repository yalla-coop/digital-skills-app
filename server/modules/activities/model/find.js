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

export { findActivityById, findActivitiesBySkillId };
