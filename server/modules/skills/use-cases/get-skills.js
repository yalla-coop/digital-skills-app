import Boom from '@hapi/boom';
import * as Skill from '../model';
import { userRoles } from '../../../constants';

const getSkills = async ({ type, areas, userId, role }) => {
  let skills = [];

  switch (type) {
    case 'areas':
      skills = await Skill.findSkillsByAreas(areas);
      skills = skills.sort(
        (a, b) => b.userSkillAreas.length - a.userSkillAreas.length,
      );
      break;

    case 'recommended':
      if (role !== userRoles.VOLUNTEER) {
        throw Boom.forbidden();
      }
      skills = await Skill.findRecommendedSkillsForVolunteer({ userId });
      break;

    default:
      skills = await Skill.findSkills();
      break;
  }
  return skills;
};

export default getSkills;
