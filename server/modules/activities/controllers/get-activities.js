import * as Activity from '../use-cases';

const getActivities = async (req, res, next) => {
  try {
    const { skillId } = req.query;
    const { user: { id, role } = {} } = req;
    let activities;

    if (skillId) {
      activities = await Activity.getActivitiesBySkillId({
        id: skillId,
        role,
        userId: id,
      });
    }

    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export default getActivities;
