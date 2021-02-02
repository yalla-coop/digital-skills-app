import { query } from '../../../database';

const updateActivityWithFeedback = async ({
  userId,
  activityId,
  completionTime,
  difficulty,
  confidenceScore,
}) => {
  const values = [
    userId,
    activityId,
    completionTime,
    difficulty,
    confidenceScore,
  ];

  const sql = `
    UPDATE users_completed_activities
    SET completion_time = $3, difficulty = $4, confidence_score = $5
    WHERE "user" = $1 AND activity = $2
    RETURNING *
  `;

  const res = await query(sql, values);
  return res.rows;
};

export { updateActivityWithFeedback };
