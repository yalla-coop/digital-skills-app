import * as Activity from '../model';

const updateActivityWithFeedback = ({
  userId,
  activityId,
  completionTime,
  confidenceScore,
  difficulty,
}) => {
  if (userId) {
    return Activity.updateActivityWithFeedback({
      userId,
      activityId,
      completionTime,
      confidenceScore,
      difficulty,
    });
  }
  return Activity.createAnonFeedback({
    activityId,
    completionTime,
    confidenceScore,
    difficulty,
  });
};

export default updateActivityWithFeedback;
