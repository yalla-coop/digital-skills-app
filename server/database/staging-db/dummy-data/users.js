import { query } from '../../connect';
import { userRoles } from '../../../constants';

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
    organisations: { ScoutsOrg },
  } = data;

  const users = [
    // HQs
    {
      fullName: 'Scouts user',
      email: 'hq@scouts.com',
      postcode: null,
      role: userRoles.HQ,
      password,
      organisation: ScoutsOrg.id,
      selectedPath: null,
      assessmentScore: 0,
      improvementScore: 0,
    },
  ];

  const ScoutsUser = await createUser(users[0]);

  return {
    ScoutsUser,
  };
};

export default createUsers;
