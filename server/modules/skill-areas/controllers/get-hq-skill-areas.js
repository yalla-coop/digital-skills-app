import * as SkillAreas from '../use-cases';

const getUserSkillAreas = async (req, res, next) => {
  try {
    const results = await SkillAreas.getHQSkillAreas();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getUserSkillAreas;
