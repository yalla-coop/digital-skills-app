import { query } from '../../../database';

const createAnonFeedback = async ({
  activityId,
  completionTime,
  difficulty,
  confidenceScore,
}) => {
  const values = [activityId, completionTime, difficulty, confidenceScore];

  const sql = `
    INSERT INTO users_completed_activities (
      activity,
      completion_time,
      difficulty,
      confidence_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4
      )
      RETURNING *
    `;

  const res = await query(sql, values);
  return res.rows[0];
};

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

  const res = await query(sql, values);
  return res.rows[0];
};

export { createAnonFeedback, createCompletedActivity };
