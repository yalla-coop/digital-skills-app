import * as Skill from '../use-cases';

const updateSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, tasks } = req.body;
    const skill = await Skill.updateSkill({ id, title, description, tasks });
    res.json(skill);
  } catch (error) {
    next(error);
  }
};

export default updateSkill;
