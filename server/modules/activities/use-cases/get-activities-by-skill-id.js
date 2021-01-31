import * as Activity from '../model';
import { userRoles } from '../../../constants';

const getActivitiesBySkillId = ({ id, userId, role }) => {
  switch (role) {
    case userRoles.HQ:
      return Activity.findActivitiesBySkillId(id);

    case userRoles.VOLUNTEER:
      return Activity.findActivitiesBySkillIdForVolunteer({ id, userId });

    default:
      return Activity.findActivitiesBySkillIdForPublic(id);
  }
};

export default getActivitiesBySkillId;
