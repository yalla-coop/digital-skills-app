import * as Skill from '../use-cases';

const updateSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, tasks, icon } = req.body;
    const skill = await Skill.updateSkill({
      id,
      title,
      description,
      tasks,
      icon,
    });
    res.json(skill);
  } catch (error) {
    next(error);
  }
};

export default updateSkill;
