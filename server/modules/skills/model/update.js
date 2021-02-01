import { query } from '../../../database';

const updateSkill = async ({ id, title, description, tasks, icon }) => {
  const values = [id, title, description, tasks, icon];
  const sql = `
    UPDATE skills
    SET
      title = $2,
      description = $3,
      tasks = $4,
      icon = $5
    WHERE id = $1
    RETURNING *
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { updateSkill };
