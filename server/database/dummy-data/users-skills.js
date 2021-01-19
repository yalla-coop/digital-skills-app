import { query } from '../connect';
import { skillStatuses } from '../../constants';

const createUserSkill = async (values) => {
  const sql = `
    INSERT INTO users_skills(
      "user",
      skill,
      status,
      added_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4
      )
    RETURNING *`;
  const res = await query(sql, [
    values.userId,
    values.skillId,
    values.status,
    values.addedScore,
  ]);
  return res.rows[0];
};

const createUsersSkills = async (data) => {
  const {
    skills,
    users: { JohnReese },
  } = data;

  const userSkills = [
    {
      userId: JohnReese.id,
      skillId: skills[1].id,
      status: skillStatuses.ALREADY_HAS,
      addedScore: 0, // not sure yet if we get how much user got from each skill on initial assessment
    },
    {
      userId: JohnReese.id,
      skillId: skills[2].id,
      status: skillStatuses.COMPLETED,
      addedScore: 2.5,
    },
    {
      userId: JohnReese.id,
      skillId: skills[3].id,
      status: skillStatuses.COMPLETED,
    },
  ];

  const _data = [
    {
      /* keep it empty to make index works */
    },
  ];
  for (let i = 0; i < userSkills.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const userSkill = await createUserSkill(userSkills[i]);
    _data.push(userSkill);
  }
  return _data;
};
export default createUsersSkills;
