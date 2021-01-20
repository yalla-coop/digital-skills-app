import { query } from '../../../database';

const findOrganisationById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findOrganisationById };
