import { query } from '../../../database';

const findCheckInById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findCheckInById };
