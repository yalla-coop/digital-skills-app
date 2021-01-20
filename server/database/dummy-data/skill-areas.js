import { query } from '../connect';
import { skillAreasCodes } from '../../constants';

const createSkillArea = async (values) => {
  const sql = `
    INSERT INTO skill_areas(
      title,
      code,
      icon
    ) VALUES (
      $1,
      $2,
      $3
      )
    RETURNING *`;
  const res = await query(sql, [values.title, values.code, values.icon]);
  return res.rows[0];
};

const createSkillAreas = async () => {
  const skillAreas = [
    {
      title: 'The basics',
      code: skillAreasCodes.BASICS,
      icon: 'computer',
    },
    {
      title: 'Planning your programme digitally',
      code: skillAreasCodes.PLANNING_PROGRAMME_DIGITALLY,
      icon: 'online',
    },
    {
      title: 'Planning events and activities',
      code: skillAreasCodes.PLANNING_EVENTS_AND_ACTIVITIES,
      icon: 'plan',
    },
    {
      title: 'Digital Finances',
      code: skillAreasCodes.DIGITAL_FINANCES,
      icon: 'finance',
    },
    {
      title: 'Digital meetings and training',
      code: skillAreasCodes.DIGITAL_MEETINGS_AND_TRAINING,
      icon: 'meeting',
    },
    {
      title: 'Data and documents',
      code: skillAreasCodes.DATA_AND_DOCUMENTS,
      icon: 'document',
    },
    {
      title: 'Getting the word out',
      code: skillAreasCodes.GETTING_THE_WORD_OUT,
      icon: 'speaker',
    },
    {
      title: 'Working together',
      code: skillAreasCodes.WORKING_TOGETHER,
      icon: 'team',
    },
  ];

  const theBasics = await createSkillArea(skillAreas[0]);
  const programmePlanning = await createSkillArea(skillAreas[1]);
  const eventsPlanning = await createSkillArea(skillAreas[2]);
  const digitalFinance = await createSkillArea(skillAreas[3]);
  const meetingsAndTraining = await createSkillArea(skillAreas[4]);
  const dataAndDocument = await createSkillArea(skillAreas[5]);
  const wordOut = await createSkillArea(skillAreas[6]);
  const workingTogether = await createSkillArea(skillAreas[7]);

  return {
    theBasics,
    programmePlanning,
    eventsPlanning,
    digitalFinance,
    meetingsAndTraining,
    dataAndDocument,
    wordOut,
    workingTogether,
  };
};

export default createSkillAreas;
