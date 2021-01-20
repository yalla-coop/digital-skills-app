import { query } from '../connect';

const createUserSkillArea = async (values) => {
  const sql = `
    INSERT INTO users_skill_areas(
      "user",
      skill_area
    ) VALUES (
      $1,
      $2
      )
    RETURNING *`;
  const res = await query(sql, [values.userId, values.skillAreaId]);
  return res.rows[0];
};

const createUsersSkillAreas = async (data) => {
  const {
    users: { JohnReese },
    skillAreas: { theBasics, digitalFinance },
  } = data;

  const userSkillAreas = [
    {
      userId: JohnReese.id,
      skillAreaId: theBasics.id,
    },
    {
      userId: JohnReese.id,
      skillAreaId: digitalFinance.id,
    },
  ];

  const JohnReeseTheBasics = await createUserSkillArea(userSkillAreas[0]);
  const JohnReeseFinance = await createUserSkillArea(userSkillAreas[1]);

  return {
    JohnReeseTheBasics,
    JohnReeseFinance,
  };
};

export default createUsersSkillAreas;
