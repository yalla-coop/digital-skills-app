import * as SkillAreas from '../use-cases';

const getSkillAreaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await SkillAreas.getSkillAreaById(id);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getSkillAreaById;
