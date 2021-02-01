import * as Activity from '../use-cases';

const getUserActivityProgress = async (req, res, next) => {
  try {
    const { activityId } = req.query;
    const { id } = req.user;

    const progress = await Activity.getUserActivityProgress({
      activityId,
      userId: id,
    });

    res.json(progress);
  } catch (error) {
    next(error);
  }
};

export default getUserActivityProgress;
