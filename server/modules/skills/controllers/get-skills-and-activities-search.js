import * as Skill from '../use-cases';

const getSkillsAndActivitiesSearch = async (req, res, next) => {
  const { task, tool } = req.query;
  try {
    const skillsAndActivities = await Skill.getSkillsAndActivitiesSearch({
      task,
      tool,
    });
    res.json(skillsAndActivities);
  } catch (error) {
    next(error);
  }
};

export default getSkillsAndActivitiesSearch;
