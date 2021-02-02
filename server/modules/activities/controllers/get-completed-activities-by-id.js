import * as Activity from '../use-cases';

const getCompletedActivitiesById = async (req, res, next) => {
  try {
    const { skillId, activityId } = req.query;
    const { id } = req.user;

    const activities = await Activity.getCompletedActivitiesById({
      id,
      activityId,
    });

    const sortedActivities = activities.filter(
      (a) => a.skill === Number(skillId),
    );

    activities.forEach(
      (a) => a.skill !== Number(skillId) && sortedActivities.push(a),
    );

    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export default getCompletedActivitiesById;
