import * as Activity from '../model';
import { userRoles } from '../../../constants';

const getActivityById = ({ id, role }) => {
  switch (role) {
    case userRoles.HQ:
      return Activity.findActivityByIdForHQ(id);

    case userRoles.VOLUNTEER:
    default:
      return Activity.findActivityById(id);
  }
};

export default getActivityById;
