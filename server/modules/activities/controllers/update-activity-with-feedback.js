import * as Activity from '../use-cases';

const updateActivityWithFeedback = async (req, res, next) => {
  try {
    const { activityId } = req.query;
    const { completionTime, confidenceScore, difficulty } = req.body;

    const updated = await Activity.updateActivityWithFeedback({
      activityId,
      userId: req.user && req.user.id,
      completionTime,
      confidenceScore,
      difficulty,
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export default updateActivityWithFeedback;
