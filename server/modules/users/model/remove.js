import { query } from '../../../database';

const deleteUserCredentials = async (id) => {
  const sql = `
  UPDATE users
  SET
    full_name = NULL,
    email = NULL,
    postcode = NULL,
    password = NULL,
    deleted = TRUE
  WHERE id = $1;
  `;

  await query(sql, [id]);
};

const deleteVolunteerFromOrg = async (id) => {
  const sql = `
  DELETE FROM volunteers_organisations
  WHERE volunteer = $1;
  `;

  await query(sql, [id]);
};

export { deleteUserCredentials, deleteVolunteerFromOrg };
