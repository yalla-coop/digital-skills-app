import * as Activity from '../model';

const getUserActivityProgress = async ({ activityId, userId }) => {
  const completedActivityScore = await Activity.findCompletedActivityById({
    activityId,
    userId,
  });

  const completedActivities = await Activity.findCompletedActivitiesByUser({
    userId,
  });

  return {
    addedScore: completedActivityScore && completedActivityScore.addedScore,
    completedActivities: completedActivities.length,
  };
};

export default getUserActivityProgress;
