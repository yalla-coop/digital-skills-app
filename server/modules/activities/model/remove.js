import { query } from '../../../database';

const deleteActivitySkills = async ({ activityId }, client) => {
  const sql = `
    DELETE FROM activities_skills
    WHERE activity = $1
  `;

  const res = await query(sql, [activityId], client);
  return res.rows[0];
};

export { deleteActivitySkills };
