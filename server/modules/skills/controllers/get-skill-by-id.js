import * as Skill from '../use-cases';

const getSkillById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user: { role } = {} } = req;
    const skill = await Skill.getSkillById({ id, role });
    res.json(skill);
  } catch (error) {
    next(error);
  }
};

export default getSkillById;
