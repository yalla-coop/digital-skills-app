import * as Activity from '../model';

const getCompletedActivitiesById = ({ id, activityId, skillId }) => {
  if (skillId)
    return Activity.findCompletedActivitysBySkillAndActivity({
      userId: id,
      activityId,
      skillId,
    });

  return Activity.findCompletedActivitiesByActivityId({
    userId: id,
    activityId,
  });
};

export default getCompletedActivitiesById;
