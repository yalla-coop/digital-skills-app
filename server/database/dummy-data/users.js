import { query } from '../connect';

const createUser = async (data) => {
  const sql = `INSERT INTO users(role, credential_id) VALUES ($1, $2) RETURNING *`;
  const res = await query(sql, data);
  return res.rows[0];
};

const createUsers = async ({ data }) => {
  const user = await createUser(data);

  return {
    user,
  };
};

export default createUsers;
