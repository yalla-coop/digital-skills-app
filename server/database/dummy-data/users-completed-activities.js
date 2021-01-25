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
    activities: { addedActivities },
  } = data;

  const microsoftActivity = addedActivities.find(
    (a) => a.title === 'Using Microsoft Word',
  );

  const completedActivities = [
    {
      userId: JohnReese.id,
      activityId: microsoftActivity.id,
      addedScore: 7.0,
    },
  ];

  const JohnReeseCompletedMicrosoftWord = await createUserCompletedActivity(
    completedActivities[0],
  );

  return {
    JohnReeseCompletedMicrosoftWord,
  };
};

export default createUserCompletedActivities;
