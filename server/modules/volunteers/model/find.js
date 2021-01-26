import { query } from '../../../database';
import { skillStatuses } from '../../../constants';

const findVolunteersStats = async (orgId) => {
  const values = [orgId, skillStatuses.COMPLETED];
  const sql = `
    SELECT
      COUNT(DISTINCT id) AS volunteers,
      COUNT(DISTINCT id)
        FILTER (WHERE assessment_score IS NOT NULL) AS volunteers_completed_assessment,
      COUNT(DISTINCT id)
        FILTER (WHERE used_skills IS NOT NULL) AS volunteers_used_a_skill,
      COUNT(DISTINCT id)
        FILTER (WHERE status = $2) AS volunteers_completed_a_skill,
      COUNT(DISTINCT id)
        FILTER (WHERE confidence_score = 3) AS volunteers_feel_confident

    FROM (
      SELECT
        u.id,
        u.assessment_score,
        UNNEST(CASE WHEN uci.used_skills <> '{}' THEN uci.used_skills ELSE '{null}' END) AS used_skills,
        us.status,
        uca.confidence_score

      FROM users AS u
      JOIN volunteers_organisations AS vo
        ON vo.volunteer = u.id
      LEFT JOIN users_check_ins AS uci
        ON uci."user" = u.id
      LEFT JOIN users_skills AS us
        ON us."user" = u.id
      LEFT JOIN users_completed_activities AS uca
        ON uca."user" = u.id
      WHERE vo.organisation = $1
    ) AS stats
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

export { findVolunteersStats };
