import { query } from '../../../database';

// add volunteer to multiple organisations
const createVolunteerOrganisations = async (
  { organisationsId, volunteerId },
  client,
) => {
  const values = [organisationsId.map(() => volunteerId), organisationsId];
  const sql = `
  INSERT INTO volunteers_organisations(
    volunteer,
    organisation
  ) SELECT * FROM UNNEST (
    $1::INT[],
    $2::INT[]
  )
  `;

  const res = await query(sql, values, client);
  return res.rows;
};

export { createVolunteerOrganisations };
