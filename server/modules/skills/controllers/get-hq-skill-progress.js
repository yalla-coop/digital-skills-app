import * as Skill from '../use-cases';

const getHQSkillProgress = async (req, res, next) => {
  try {
    const skillProgress = await Skill.getHQSkillProgress(req.user);
    res.json(skillProgress);
  } catch (error) {
    next(error);
  }
};

export default getHQSkillProgress;
