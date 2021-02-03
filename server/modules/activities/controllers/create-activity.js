import * as Activity from '../use-cases';

const createActivity = async (req, res, next) => {
  try {
    const { id } = req.user;
    const {
      skills,
      title,
      description,
      difficulty,
      completionTime,
      resourceLink,
      resourceCreatedBy,
    } = req.body;
    const activity = await Activity.createActivity({
      skills,
      title,
      description,
      difficulty,
      completionTime,
      resourceLink,
      resourceCreatedBy,
      userId: id,
    });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default createActivity;
