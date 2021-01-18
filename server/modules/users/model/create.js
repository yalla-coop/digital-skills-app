import { query } from '../../../database';

// pass client instance when you run this query in transaction
const createUser = async (client) => {
  const values = [];
  const sql = ``;

  const res = await query(sql, values, client);
  return res.rows;
};

export { createUser };
