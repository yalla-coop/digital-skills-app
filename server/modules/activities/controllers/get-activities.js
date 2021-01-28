import * as Activity from '../use-cases';

const getActivities = async (req, res, next) => {
  try {
    const { skillId } = req.query;
    const { role } = req.user;
    let activities;

    if (skillId) {
      activities = await Activity.getActivitiesBySkillId({ id: skillId, role });
    }

    res.json(activities);
  } catch (error) {
    next(error);
  }
};

export default getActivities;
