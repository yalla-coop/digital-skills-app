import { query } from '../../../database';

const findHQSkillAreas = async () => {
  const values = [];

  const sql = `
    SELECT
      sa.id,
      sa.title,
      COUNT(DISTINCT sas.skill) AS skills,
      COUNT(DISTINCT acs.activity) AS activities
    FROM skill_areas AS sa
    LEFT JOIN skill_areas_skills AS sas
      ON sas.skill_area = sa.id
     LEFT JOIN activities_skills AS acs
       ON acs.skill = sas.skill
    GROUP BY sa.id
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findSkillAreaById = async (id) => {
  const values = [id];

  const sql = `
    SELECT
      sa.id,
      sa.title,
      ARRAY
      (
        SELECT
          json_build_object(
            'id', s.id,
            'title', s.title,
            'activities', COUNT(DISTINCT acs.activity)
          )
        FROM skill_areas_skills AS sas
        JOIN skills AS s
          ON s.id = sas.skill
        LEFT JOIN activities_skills AS acs
          ON acs.skill = s.id
        WHERE sas.skill_area = $1
        GROUP BY s.id
      ) as skills
    FROM skill_areas AS sa

    WHERE sa.id = $1
  `;

  const res = await query(sql, values);
  return res.rows[0];
};

const findSkillAreas = async () => {
  const values = [];

  const sql = `
    SELECT
      id,
      title,
      code
    FROM skill_areas 
  `;

  const res = await query(sql, values);
  return res.rows;
};

const findSkillAreaByCode = async (code) => {
  const sql = `
    SELECT
      *
    FROM skill_areas
    WHERE code = $1 
  `;

  const res = await query(sql, [code]);
  return res.rows;
};

export {
  findHQSkillAreas,
  findSkillAreaById,
  findSkillAreas,
  findSkillAreaByCode,
};
