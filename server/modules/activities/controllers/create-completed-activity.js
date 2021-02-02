import * as Activity from '../use-cases';

const createCompletedActivity = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  try {
    const completedActivity = await Activity.createCompletedActivity({
      activityId: Number(id),
      userId,
    });

    res.json(completedActivity);
  } catch (error) {
    next(error);
  }
};

export default createCompletedActivity;
