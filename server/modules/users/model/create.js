import { query } from '../../../database';

const createUser = async (
  { fullName, email, postcode, role, password, selectedPath, assessmentScore },
  client,
) => {
  const sql = `
    INSERT INTO users(
      full_name,
      email,
      postcode,
      role,
      password,
      selected_path,
      assessment_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    )
    RETURNING *
    `;

  const values = [
    fullName,
    email,
    postcode,
    role,
    password,
    selectedPath,
    assessmentScore,
  ];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { createUser };
