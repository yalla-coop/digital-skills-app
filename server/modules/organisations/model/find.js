import { query } from '../../../database';

const findOrganisationById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

// for public
const findOrganisations = async () => {
  const values = [];
  const sql = `
    SELECT
      id,
      name
    FROM organisations
  `;

  const res = await query(sql, values);
  return res.rows;
};

export { findOrganisationById, findOrganisations };
