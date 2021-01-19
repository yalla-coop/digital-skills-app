import { query } from '../connect';

const createVolunteersOrganisation = async (values) => {
  const sql = `
    INSERT INTO volunteers_organisations(
      organisation,
      volunteer
    ) VALUES (
      $1,
      $2
      )
    RETURNING *`;
  const res = await query(sql, [values.organisationId, values.volunteerId]);
  return res.rows[0];
};

const createVolunteersOrganisations = async (data) => {
  const {
    users: { JohnReese, HaroldFinch },
    organisations: { AvonTyrrellOrg, LegendsAndPioneersOrg },
  } = data;

  await createVolunteersOrganisation({
    organisationId: AvonTyrrellOrg.id,
    volunteerId: JohnReese.id,
  });

  await createVolunteersOrganisation({
    organisationId: LegendsAndPioneersOrg.id,
    volunteerId: JohnReese.id,
  });

  await createVolunteersOrganisation({
    organisationId: AvonTyrrellOrg.id,
    volunteerId: HaroldFinch.id,
  });
};

export default createVolunteersOrganisations;
