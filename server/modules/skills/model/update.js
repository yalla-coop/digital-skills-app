import { query } from '../../../database';
import { skillStatuses } from '../../../constants';

const updateSkill = async ({ id, title, description, tasks, icon }) => {
  const values = [id, title, description, tasks, icon];
  const sql = `
    UPDATE skills
    SET
      title = $2,
      description = $3,
      tasks = $4,
      icon = $5
    WHERE id = $1
    RETURNING *
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const upsertUserSkills = async (
  { userId, skillId, addedScore, isCompleted },
  client,
) => {
  if (!client) throw new Error('This query require to be inside a client');

  const status = isCompleted
    ? skillStatuses.COMPLETED
    : skillStatuses.IN_PROGRESS;

  const values = [userId, skillId, status, addedScore];

  const sql = `
    INSERT INTO users_skills AS us (
      "user",
      skill,
      status,
      added_score
    ) VALUES (
      $1,
      $2,
      $3,
      $4
    )
    ON CONFLICT ("user", skill)
    DO UPDATE SET
      added_score = us.added_score + $4,
      status = $3
  `;

  const res = await client.query(sql, values);
  return res.rows[0];
};

export { updateSkill, upsertUserSkills };
