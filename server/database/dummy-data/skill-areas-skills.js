import { query } from '../connect';

const createSkillAreasSkill = async (values) => {
  const sql = `
    INSERT INTO skill_areas_skills(
      skill,
      skill_area
    ) VALUES (
      $1,
      $2
      )
    RETURNING *`;
  const res = await query(sql, [values.skillId, values.skillAreaId]);
  return res.rows[0];
};

const createSkillAreasSkills = async (data) => {
  const {
    skillAreas: {
      theBasics,
      programmePlanning,
      eventsPlanning,
      digitalFinance,
      meetingsAndTraining,
      dataAndDocument,
      wordOut,
      workingTogether,
    },
    skills,
  } = data;

  const skillsMap = [
    // Foundation skills
    { skillId: skills[1].id, skillAreaId: theBasics.id },
    { skillId: skills[2].id, skillAreaId: theBasics.id },
    { skillId: skills[3].id, skillAreaId: theBasics.id },
    { skillId: skills[4].id, skillAreaId: theBasics.id },
    { skillId: skills[5].id, skillAreaId: theBasics.id },
    { skillId: skills[6].id, skillAreaId: theBasics.id },
    { skillId: skills[7].id, skillAreaId: theBasics.id },
    { skillId: skills[8].id, skillAreaId: theBasics.id },
    { skillId: skills[9].id, skillAreaId: theBasics.id },
    { skillId: skills[10].id, skillAreaId: theBasics.id },

    // Be safe, legal and confident online
    { skillId: skills[11].id, skillAreaId: theBasics.id },

    { skillId: skills[12].id, skillAreaId: theBasics.id },

    { skillId: skills[13].id, skillAreaId: digitalFinance.id },
    { skillId: skills[13].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[13].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[13].id, skillAreaId: wordOut.id },

    { skillId: skills[14].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[14].id, skillAreaId: digitalFinance.id },
    { skillId: skills[14].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[15].id, skillAreaId: digitalFinance.id },
    { skillId: skills[15].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[16].id, skillAreaId: theBasics.id },
    { skillId: skills[16].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[17].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[17].id, skillAreaId: wordOut.id },

    { skillId: skills[18].id, skillAreaId: theBasics.id },
    { skillId: skills[18].id, skillAreaId: meetingsAndTraining.id },

    { skillId: skills[19].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[20].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[21].id, skillAreaId: theBasics.id },
    { skillId: skills[21].id, skillAreaId: wordOut.id },

    { skillId: skills[22].id, skillAreaId: wordOut.id },

    { skillId: skills[23].id, skillAreaId: theBasics.id },

    { skillId: skills[24].id, skillAreaId: theBasics.id },

    { skillId: skills[25].id, skillAreaId: theBasics.id },

    { skillId: skills[26].id, skillAreaId: theBasics.id },

    { skillId: skills[27].id, skillAreaId: theBasics.id },
    { skillId: skills[27].id, skillAreaId: workingTogether.id },

    { skillId: skills[28].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[28].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[28].id, skillAreaId: workingTogether.id },

    { skillId: skills[29].id, skillAreaId: digitalFinance.id },
    { skillId: skills[29].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[29].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[29].id, skillAreaId: workingTogether.id },

    { skillId: skills[30].id, skillAreaId: theBasics.id },
    { skillId: skills[30].id, skillAreaId: workingTogether.id },

    { skillId: skills[31].id, skillAreaId: theBasics.id },
    { skillId: skills[31].id, skillAreaId: wordOut.id },

    { skillId: skills[32].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[32].id, skillAreaId: wordOut.id },

    { skillId: skills[33].id, skillAreaId: programmePlanning.id },
    { skillId: skills[33].id, skillAreaId: digitalFinance.id },
    { skillId: skills[33].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[34].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[34].id, skillAreaId: wordOut.id },

    { skillId: skills[35].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[35].id, skillAreaId: workingTogether.id },

    { skillId: skills[36].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[36].id, skillAreaId: workingTogether.id },

    { skillId: skills[37].id, skillAreaId: programmePlanning.id },
    { skillId: skills[37].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[37].id, skillAreaId: wordOut.id },
    { skillId: skills[37].id, skillAreaId: workingTogether.id },

    { skillId: skills[38].id, skillAreaId: programmePlanning.id },
    { skillId: skills[38].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[38].id, skillAreaId: digitalFinance.id },
    { skillId: skills[38].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[38].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[38].id, skillAreaId: wordOut.id },
    { skillId: skills[38].id, skillAreaId: workingTogether.id },

    { skillId: skills[39].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[39].id, skillAreaId: wordOut.id },

    { skillId: skills[40].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[40].id, skillAreaId: wordOut.id },

    { skillId: skills[41].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[41].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[41].id, skillAreaId: workingTogether.id },

    { skillId: skills[42].id, skillAreaId: programmePlanning.id },
    { skillId: skills[42].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[42].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[42].id, skillAreaId: workingTogether.id },

    { skillId: skills[43].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[43].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[43].id, skillAreaId: workingTogether.id },

    { skillId: skills[44].id, skillAreaId: programmePlanning.id },
    { skillId: skills[44].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[44].id, skillAreaId: workingTogether.id },

    { skillId: skills[45].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[45].id, skillAreaId: meetingsAndTraining.id },

    { skillId: skills[46].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[46].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[46].id, skillAreaId: wordOut.id },

    { skillId: skills[47].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[47].id, skillAreaId: wordOut.id },

    { skillId: skills[48].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[48].id, skillAreaId: wordOut.id },

    { skillId: skills[49].id, skillAreaId: wordOut.id },

    { skillId: skills[50].id, skillAreaId: wordOut.id },

    { skillId: skills[51].id, skillAreaId: wordOut.id },

    { skillId: skills[52].id, skillAreaId: digitalFinance.id },
    { skillId: skills[52].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[52].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[53].id, skillAreaId: digitalFinance.id },
    { skillId: skills[53].id, skillAreaId: meetingsAndTraining.id },
    { skillId: skills[53].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[54].id, skillAreaId: digitalFinance.id },
    { skillId: skills[54].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[55].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[56].id, skillAreaId: digitalFinance.id },
    { skillId: skills[56].id, skillAreaId: dataAndDocument.id },

    { skillId: skills[57].id, skillAreaId: theBasics.id },
    { skillId: skills[57].id, skillAreaId: programmePlanning.id },
    { skillId: skills[57].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[57].id, skillAreaId: meetingsAndTraining.id },

    { skillId: skills[58].id, skillAreaId: programmePlanning.id },
    { skillId: skills[58].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[58].id, skillAreaId: digitalFinance.id },
    { skillId: skills[58].id, skillAreaId: wordOut.id },
    { skillId: skills[58].id, skillAreaId: workingTogether.id },

    { skillId: skills[59].id, skillAreaId: programmePlanning.id },

    { skillId: skills[60].id, skillAreaId: dataAndDocument.id },
    { skillId: skills[60].id, skillAreaId: wordOut.id },

    { skillId: skills[61].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[61].id, skillAreaId: meetingsAndTraining.id },

    { skillId: skills[62].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[62].id, skillAreaId: digitalFinance.id },

    { skillId: skills[63].id, skillAreaId: eventsPlanning.id },
    { skillId: skills[63].id, skillAreaId: digitalFinance.id },
  ];

  const _data = [
    {
      /* keep it empty to make index works */
    },
  ];
  for (let i = 0; i < skillsMap.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const skill = await createSkillAreasSkill(skillsMap[i]);
    _data.push(skill);
  }
  return _data;
};
export default createSkillAreasSkills;
