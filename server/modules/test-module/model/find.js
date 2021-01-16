import { query } from '../../../database';

const findTestById = async ({ testId }) => {
  const values = [testId];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows;
};

export { findTestById };
