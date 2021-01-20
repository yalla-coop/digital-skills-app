import * as Skill from '../use-cases';

const getSkillById = async (req, res, next) => {
  try {
    const organisation = await Skill.getSkillById();
    res.json(organisation);
  } catch (error) {
    next(error);
  }
};

export default getSkillById;
