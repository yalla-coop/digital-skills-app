import { query } from '../../../database';

const updateSkill = async ({ id, title, description, tasks }) => {
  const values = [id, title, description, tasks];
  const sql = `
    UPDATE skills
    SET
      title = $2,
      description = $3,
      tasks = $4
    WHERE id = $1
    RETURNING *
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { updateSkill };
