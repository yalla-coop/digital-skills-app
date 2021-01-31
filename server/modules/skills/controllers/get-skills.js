import * as Skill from '../use-cases';

const getSkills = async (req, res, next) => {
  const { areas, type } = req.query;
  const { user: { id, role } = {} } = req;
  try {
    const skills = await Skill.getSkills({ type, areas, userId: id, role });

    res.json(skills);
  } catch (error) {
    next(error);
  }
};

export default getSkills;
