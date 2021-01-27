import * as Skill from '../use-cases';

const getSkillsAndActivitiesPopular = async (req, res, next) => {
  try {
    const skillsAndActivities = await Skill.getSkillsAndActivitiesPopular();
    res.json(skillsAndActivities);
  } catch (error) {
    next(error);
  }
};

export default getSkillsAndActivitiesPopular;
