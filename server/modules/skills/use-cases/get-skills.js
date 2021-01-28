import * as Skill from '../model';

const getSkills = async ({ type, areas }) => {
  let skills = [];

  switch (type) {
    case 'areas':
      skills = await Skill.findSkillsByAreas(areas);
      break;
    default:
      skills = await Skill.findSkills();
      break;
  }
  return skills;
};

export default getSkills;
