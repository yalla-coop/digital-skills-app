import { query } from '../connect';

const createActivitySkill = async (values) => {
  const sql = `
    INSERT INTO activities_skills(
      skill,
      activity
    ) VALUES (
      $1,
      $2
      )
    RETURNING *`;
  const res = await query(sql, [values.skillId, values.activityId]);
  return res.rows[0];
};

const createActivitiesSkills = async (data) => {
  const {
    skills,
    activities: { microsoftWordActivity, outlookExpress },
  } = data;

  const activitiesSkills = [
    {
      skillId: skills[1].id,
      activityId: microsoftWordActivity.id,
    },
    {
      skillId: skills[2].id,
      activityId: microsoftWordActivity.id,
    },
    {
      skillId: skills[13].id,
      activityId: microsoftWordActivity.id,
    },

    {
      skillId: skills[1].id,
      activityId: outlookExpress.id,
    },
    {
      skillId: skills[2].id,
      activityId: outlookExpress.id,
    },
    {
      skillId: skills[29].id,
      activityId: outlookExpress.id,
    },
  ];

  const _data = [
    {
      /* keep it empty to make index works */
    },
  ];
  for (let i = 0; i < activitiesSkills.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const skill = await createActivitySkill(activitiesSkills[i]);
    _data.push(skill);
  }
  return _data;
};
export default createActivitiesSkills;
