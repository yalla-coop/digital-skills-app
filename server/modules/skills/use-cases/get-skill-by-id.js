import * as Skill from '../model';
import { userRoles } from '../../../constants';

const getSkillById = ({ id, role }) => {
  switch (role) {
    case userRoles.HQ:
      return Skill.findSkillById(id);

    default:
      break;
  }
};

export default getSkillById;
