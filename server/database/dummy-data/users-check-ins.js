import { query } from '../connect';

const createUserCheckIn = async (values) => {
  const sql = `
    INSERT INTO users_check_ins(
      "user",
      used_skills
    ) VALUES (
      $1,
      $2
      )
    RETURNING *`;
  const res = await query(sql, [values.userId, values.userSkills]);
  return res.rows[0];
};

const createUserCheckIns = async (data) => {
  const {
    skills,
    users: { JohnReese },
  } = data;

  const checkIns = [
    {
      userId: JohnReese.id,
      userSkills: [skills[1].id, skills[2].id, skills[3].id],
    },
  ];

  const JohnReeseCheckInToday = await createUserCheckIn(checkIns[0]);

  return { JohnReeseCheckInToday };
};
export default createUserCheckIns;
