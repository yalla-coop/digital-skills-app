import Boom from '@hapi/boom';
import * as Skill from '../model';
import { userRoles } from '../../../constants';

const getSkillsStats = ({ id, role }) => {
  switch (role) {
    case userRoles.VOLUNTEER:
      return Skill.findVolunteerSkillsStats(id);

    default:
      throw Boom.forbidden();
  }
};

export default getSkillsStats;
