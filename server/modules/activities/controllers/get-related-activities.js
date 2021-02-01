import * as Activity from '../use-cases';

const getRelatedActivities = async (req, res, next) => {
  try {
    const { skillId, activityId } = req.query;

    const activities = await Activity.getRelatedActivities({
      skillId,
      activityId,
    });

    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export default getRelatedActivities;
