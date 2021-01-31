import { query } from '../connect';

const createUserCompletedActivity = async (values) => {
  const sql = `
    INSERT INTO users_completed_activities(
      "user",
      activity,
      confidence_score,
      added_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4
      )
    RETURNING *`;
  const res = await query(sql, [
    values.userId,
    values.activityId,
    values.confidenceScore,
    values.addedScore,
  ]);
  return res.rows[0];
};

const createUserCompletedActivities = async (data) => {
  const {
    users: { JohnReese },
    activities: { addedActivities },
  } = data;

  const microsoftActivity = addedActivities.find(
    (a) => a.title === 'Using Microsoft Word',
  );

  const completedActivities = [
    {
      userId: JohnReese.id,
      activityId: microsoftActivity.id,
      confidenceScore: 3,
      addedScore: 7.0,
    },
    {
      userId: JohnReese.id,
      activityId: '20',
      confidenceScore: 2,
      addedScore: 7.0,
    },
    {
      userId: JohnReese.id,
      activityId: '60',
      confidenceScore: 1,
      addedScore: 7.0,
    },
  ];

  const JohnReeseCompletedMicrosoftWord = await createUserCompletedActivity(
    completedActivities[0],
  );

  const JohnCompletedAnother = await createUserCompletedActivity(
    completedActivities[1],
  );

  const JohnCompletedOneMore = await createUserCompletedActivity(
    completedActivities[2],
  );

  return {
    JohnReeseCompletedMicrosoftWord,
    JohnCompletedAnother,
    JohnCompletedOneMore,
  };
};

export default createUserCompletedActivities;
