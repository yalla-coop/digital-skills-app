import * as Activity from '../model';

const getRelatedActivitiesByUser = async ({ skillId, id }) => {
  const activities = await Activity.findRelatedActivitiesBySkillAndUser({
    skillId,
    userId: id,
  });

  const skillRelatedActivitiesToComplete = activities.filter(
    (a) => Number(a.completed) < 1,
  );

  if (skillRelatedActivitiesToComplete.length > 2) {
    return skillRelatedActivitiesToComplete;
  }

  const relatedActivities = await Activity.findRelatedActivitiesByUser({
    userId: id,
  });

  const allActivitiesToComplete = relatedActivities.filter(
    (a) => Number(a.completed) < 1,
  );

  return [...skillRelatedActivitiesToComplete, ...allActivitiesToComplete];
};

export default getRelatedActivitiesByUser;
