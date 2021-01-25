import { query } from '../../../database';

const findUserById = async (id) => {
  const values = [id];
  const sql = `
  SELECT
    id,
    full_name,
    email,
    postcode,
    role,
    organisation,
    selected_path,
    deleted, false,
    assessment_score,
    improvement_score
  FROM users
    WHERE id = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const values = [email];
  const sql = `
  SELECT
    id,
    full_name,
    email,
    password,
    postcode,
    role,
    organisation,
    selected_path,
    deleted, false,
    assessment_score,
    improvement_score

  FROM users
    WHERE email = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findUserById, findUserByEmail };
