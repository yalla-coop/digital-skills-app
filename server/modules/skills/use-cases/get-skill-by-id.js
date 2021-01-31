import Boom from '@hapi/boom';
import * as Skill from '../model';
import { userRoles } from '../../../constants';

const getSkillById = async ({ id, role }) => {
  let skill;
  switch (role) {
    case userRoles.HQ:
      skill = await Skill.findSkillById(id);
      break;

    case userRoles.VOLUNTEER:
    default:
      skill = await Skill.findSkillByIdForVolunteerAndPublic(id);
      break;
  }

  if (!skill) throw Boom.notFound();
  return skill;
};

export default getSkillById;
