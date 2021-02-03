import * as Activity from '../use-cases';

const updateActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      skills,
      title,
      description,
      difficulty,
      completionTime,
      resourceLink,
      resourceCreatedBy,
    } = req.body;
    const activity = await Activity.updateActivity({
      id,
      skills,
      title,
      description,
      difficulty,
      completionTime,
      resourceLink,
      resourceCreatedBy,
    });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default updateActivity;
