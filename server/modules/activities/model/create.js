const createCompletedActivity = async (
  { activityId, userId, addedScore },
  client,
) => {
  if (!client) throw new Error('This query require to be inside a client');
  const values = [userId, activityId, addedScore];

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
    RETURNING *
  `;

  const res = await client.query(sql, values);
  return res.rows[0];
};

export { createCompletedActivity };
