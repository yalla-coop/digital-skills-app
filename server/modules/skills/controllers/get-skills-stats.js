import * as Skill from '../use-cases';

const getSkillsStats = async (req, res, next) => {
  const { id, role } = req.user;
  try {
    const stats = await Skill.getSkillsStats({
      id,
      role,
    });
    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export default getSkillsStats;
