import { query } from '../../../database';

const findSkillById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findSkillById };
