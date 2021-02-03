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

const createActivity = async (
  {
    title,
    difficulty,
    completionTime,
    description,
    resourceLink,
    resourceCreatedBy,
    createdBy,
  },
  client,
) => {
  const sql = `
    INSERT INTO activities(
      title,
      difficulty,
      completion_time,
      description,
      resource_link,
      resource_created_by,
      created_by
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    )
    RETURNING *
    `;

  const values = [
    title,
    difficulty,
    completionTime,
    description,
    resourceLink,
    resourceCreatedBy,
    createdBy,
  ];

  const res = await query(sql, values, client);
  return res.rows[0];
};

const createActivitySkills = async ({ skillsId, activityId }, client) => {
  const values = [skillsId, skillsId.map(() => activityId)];
  const sql = `
  INSERT INTO activities_skills(
    skill,
    activity
  ) SELECT * FROM UNNEST (
    $1::INT[],
    $2::INT[]
  )
  `;

  const res = await query(sql, values, client);
  return res.rows;
};

export {
  createAnonFeedback,
  createCompletedActivity,
  createActivity,
  createActivitySkills,
};
