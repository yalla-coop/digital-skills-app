import { query } from '../connect';
import { userRoles, learningPaths } from '../../constants';

// 123456 password
const password = '$2y$12$H2JL7UD1HCgOvd.aY33GUuNvwAQFPxx4ipqk5ZQwsx8bIbgzLKq/2';

const createUser = async (values) => {
  const sql = `
    INSERT INTO users(
      full_name,
      email,
      postcode,
      role,
      password,
      organisation,
      selected_path,
      assessment_score,
      improvement_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7,
      $8,
      $9
      )
    RETURNING *`;
  const res = await query(sql, [
    values.fullName,
    values.email,
    values.postcode,
    values.role,
    values.password,
    values.organisation,
    values.selectedPath,
    values.assessmentScore,
    values.improvementScore,
  ]);
  return res.rows[0];
};

const createUsers = async (data) => {
  const {
    organisations: { ScoutsOrg, LegendsAndPioneersOrg },
  } = data;

  const users = [
    // volunteers
    {
      fullName: 'John Reese',
      email: 'volunteer1@scouts.com',
      postcode: 'B33 8TH',
      role: userRoles.VOLUNTEER,
      password,
      organisation: null,
      selectedPath: learningPaths.BASIC,
      assessmentScore: 20.5,
      improvementScore: 0,
    },
    {
      fullName: 'Harold Finch',
      email: 'volunteer2@scouts.com',
      postcode: 'EC1A 1BB',
      role: userRoles.VOLUNTEER,
      password,
      organisation: null,
      selectedPath: learningPaths.IMPROVE,
      assessmentScore: 10.5,
      improvementScore: 20.0,
    },
    // HQs
    {
      fullName: 'Krista Forster',
      email: 'hq1@scouts.com',
      postcode: null,
      role: userRoles.HQ,
      password,
      organisation: ScoutsOrg.id,
      selectedPath: null,
      assessmentScore: 0,
      improvementScore: 0,
    },
    {
      fullName: 'Danial Schneider',
      email: 'hq2@scouts.com',
      postcode: null,
      role: userRoles.HQ,
      password,
      organisation: LegendsAndPioneersOrg.id,
      selectedPath: null,
      assessmentScore: 0,
      improvementScore: 0,
    },
  ];

  const JohnReese = await createUser(users[0]);
  const HaroldFinch = await createUser(users[1]);
  const KristaForster = await createUser(users[2]);
  const DanialSchneider = await createUser(users[3]);

  return {
    JohnReese,
    HaroldFinch,
    KristaForster,
    DanialSchneider,
  };
};

export default createUsers;
