import { query } from '../connect';
import { formattedSkillActivities } from './initSkillsToActivitiesData';

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
    activities: { addedActivities },
  } = data;

  const activitiesSkills = [];

  formattedSkillActivities.forEach((skill) => {
    const foundSkill = skills.find((s) => s.title === skill.skillTitle);

    if (foundSkill) {
      skill.activityTitles.forEach((title) => {
        const foundActivity = addedActivities.find((a) => a.title === title);
        if (foundActivity) {
          activitiesSkills.push({
            skillId: foundSkill.id,
            activityId: foundActivity.id,
          });
        }
      });
    }
  });

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
