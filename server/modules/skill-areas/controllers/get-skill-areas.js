import * as SkillAreas from '../use-cases';

const getSkillAreas = async (req, res, next) => {
  try {
    const results = await SkillAreas.getSkillAreas();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getSkillAreas;
