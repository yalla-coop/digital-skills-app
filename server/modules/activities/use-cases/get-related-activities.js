import * as Activity from '../model';

const getRelatedActivities = async ({ activityId, skillId }) => {
  const activities = await Activity.findRelatedActivitiesBySkill({
    skillId,
    activityId,
  });

  if (activities.length > 2) {
    return activities;
  }

  const otherActivitiesForSkillArea = await Activity.findRelatedActivitiesBySkillAreasLinkedToSkill(
    {
      skillId,
      activityId,
    },
  );

  return [...activities, ...otherActivitiesForSkillArea];
};

export default getRelatedActivities;
