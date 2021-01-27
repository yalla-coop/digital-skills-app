import { query } from '../../../database';
import { skillStatuses } from '../../../constants';

const findSkillById = async (id) => {
  const values = [id];
  const sql = ``;

  const res = await query(sql, values);
  return res.rows[0];
};

const findSkillAndActivitiesForSearch = async ({ tool, task }) => {
  const tasksArray = task.split(' ');

  const tasksQueryText = tasksArray
    .map((v, i) => `to_tsquery($${i + 2})`) // keep the first param ($1) for the "tool" and start form $2
    .join(' || '); // matches any word in the task

  const sql = `
    SELECT
      id,
      title,
      type
    FROM(
      SELECT id, title, description, 'skill' AS type, document
      FROM skills AS s
      WHERE s.document @@ (plainto_tsquery($1) && (${tasksQueryText})) -- use && to exact match the tool
      UNION
      SELECT id, title, description, 'activity' AS type, document
      FROM activities AS a
      WHERE a.document @@ (plainto_tsquery($1) && (${tasksQueryText})) -- use && to exact match the tool
    ) AS t
    ORDER BY ts_rank(
      document,
      (plainto_tsquery($1) && (${tasksQueryText}))
    )
    LIMIT 10
  `;

  const res = await query(sql, [tool, ...tasksArray]);
  return res.rows;
};

const getPopularSkillsAndActivities = async () => {
  const sql = `
    SELECT
      type,
      t.id,
      COALESCE(s.title, a.title) AS title
    FROM(
      SELECT skill AS id, 'skill' AS type, COUNT(us.id) AS popularity
      FROM users_skills AS us
      WHERE status = $1
      GROUP BY skill
      UNION
      SELECT activity AS id, 'activity' AS type, COUNT(uac.id) AS popularity
      FROM users_completed_activities AS uac
      GROUP BY activity
    ) AS t
    LEFT JOIN skills AS s ON(s.id = t.id AND t.type = 'skill') 
    LEFT JOIN activities AS a ON(a.id = t.id AND t.type = 'activity') 
    ORDER BY popularity DESC
    LIMIT 10
  `;

  const res = await query(sql, [skillStatuses.COMPLETED]);
  return res.rows;
};

export {
  findSkillById,
  findSkillAndActivitiesForSearch,
  getPopularSkillsAndActivities,
};
