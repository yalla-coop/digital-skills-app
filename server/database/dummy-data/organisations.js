import { query } from '../connect';

const createOrganisation = async (values) => {
  const sql = `
    INSERT INTO organisations(
      name
    ) VALUES (
      $1
      )
    RETURNING *`;
  const res = await query(sql, values);
  return res.rows[0];
};

const createOrganisations = async () => {
  const AvonTyrrellOrg = await createOrganisation(['Avon Tyrrell']);
  const LegendsAndPioneersOrg = await createOrganisation([
    'Legends & pioneers',
  ]);

  return {
    AvonTyrrellOrg,
    LegendsAndPioneersOrg,
  };
};

export default createOrganisations;
