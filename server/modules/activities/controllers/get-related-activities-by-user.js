import * as Activity from '../use-cases';

const getRelatedActivitiesByUser = async (req, res, next) => {
  try {
    const { skillId } = req.query;
    const { id } = req.user;

    const activities = await Activity.getRelatedActivitiesByUser({
      id,
      skillId,
    });

    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export default getRelatedActivitiesByUser;
