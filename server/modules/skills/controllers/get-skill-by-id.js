import * as Skill from '../use-cases';

const getSkillById = async (req, res, next) => {
  try {
    const skill = await Skill.getSkillById();
    res.json(skill);
  } catch (error) {
    next(error);
  }
};

export default getSkillById;
