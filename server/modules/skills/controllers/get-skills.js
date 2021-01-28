import * as Skill from '../use-cases';

const getSkills = async (req, res, next) => {
  const { areas } = req.query;
  try {
    const skills = await Skill.getSkills({ type: 'areas', areas });

    const sortedSkills = skills.sort(
      (a, b) => b.userSkillAreas.length - a.userSkillAreas.length,
    );
    res.json(sortedSkills);
  } catch (error) {
    next(error);
  }
};

export default getSkills;
