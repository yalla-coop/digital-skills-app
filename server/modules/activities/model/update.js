import { query } from '../../../database';

const updateActivity = async ({
  id,
  title,
  description,
  difficulty,
  completionTime,
  resourceLink,
  resourceCreatedBy,
}) => {
  const values = [
    id,
    title,
    difficulty,
    completionTime,
    description,
    resourceLink,
    resourceCreatedBy,
  ];
  const sql = `
    UPDATE activities
    SET
      title = $2,
      difficulty = $3,
      completion_time = $4,
      description = $5,
      resource_link = $6,
      resource_created_by = $7
     
    WHERE id = $1
    RETURNING *
    `;

  const res = await query(sql, values);
  return res.rows[0];
};

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

export { updateActivityWithFeedback, updateActivity };
