import { query } from '../../../database';

const updateUserById = async () => {
  const sql = ``;

  const res = await query(sql);
  return res.rows[0];
};

const updateUserImprovementScore = async ({ userId, addedScore }, client) => {
  if (!client) throw new Error('This query require to be inside a client');

  const values = [userId, addedScore];

  const sql = `
    UPDATE users AS u SET
      improvement_score = u.improvement_score + $2
    WHERE u.id = $1
  `;

  const res = await client.query(sql, values);
  return res.rows[0];
};

export { updateUserById, updateUserImprovementScore };
