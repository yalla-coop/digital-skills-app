import { query } from '../connect';

const createUserCompletedActivity = async (values) => {
  const sql = `
    INSERT INTO users_completed_activities(
      "user",
      activity,
      added_score
    ) VALUES (
      $1,
      $2,
      $3
      )
    RETURNING *`;
  const res = await query(sql, [
    values.userId,
    values.activityId,
    values.addedScore,
  ]);
  return res.rows[0];
};

const createUserCompletedActivities = async (data) => {
  const {
    users: { JohnReese },
    activities: { microsoftWordActivity },
  } = data;

  const completedActivities = [
    {
      userId: JohnReese.id,
      activityId: microsoftWordActivity.id,
      addedScore: 700,
    },
  ];

  const JohnReeseCompletedMicrosoftWord = await createUserCompletedActivity(
    completedActivities,
  );

  return {
    JohnReeseCompletedMicrosoftWord,
  };
};

export default createUserCompletedActivities;
