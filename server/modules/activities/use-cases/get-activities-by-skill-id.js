import * as Activity from '../model';
import { userRoles } from '../../../constants';

const getActivitiesBySkillId = ({ id, role }) => {
  switch (role) {
    case userRoles.HQ:
      return Activity.findActivitiesBySkillId(id);

    default:
      break;
  }
};

export default getActivitiesBySkillId;
