import { query } from '../../../database';

const deleteUserById = async () => {
  const sql = ``;

  const res = await query(sql);
  return res.rows[0];
};

export { deleteUserById };
