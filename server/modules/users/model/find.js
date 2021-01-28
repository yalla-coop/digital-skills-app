import { query } from '../../../database';

const findUserById = async (id) => {
  const values = [id];
  const sql = `
  SELECT
    id,
    full_name,
    email,
    postcode,
    role,
    organisation,
    selected_path,
    deleted, false,
    assessment_score,
    improvement_score
  FROM users
    WHERE id = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const values = [email];
  const sql = `
  SELECT
    id,
    full_name,
    email,
    password,
    postcode,
    role,
    organisation,
    selected_path,
    deleted, false,
    assessment_score,
    improvement_score

  FROM users
    WHERE email = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findHqDashboard = async (orgId) => {
  const values = [orgId];
  const sql = `
    SELECT
      COUNT(DISTINCT id)
        FILTER (WHERE assessment_score IS NOT NULL) AS volunteers_completed_assessment,
      COUNT(DISTINCT user_skill_id) AS completed_skills

    FROM (
      SELECT
          u.id,
          u.assessment_score,
          us.skill::TEXT || us.user::TEXT AS user_skill_id
      FROM users AS u
      JOIN volunteers_organisations AS vo
        ON vo.volunteer = u.id
      LEFT JOIN users_skills AS us
        ON us."user" = u.id
      WHERE vo.organisation = $1
    ) AS stats
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findUserById, findUserByEmail, findHqDashboard };
