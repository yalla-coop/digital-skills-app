import Boom from '@hapi/boom';
import * as User from '../model';
import { userRoles as r } from '../../../constants';

function getUserById({ organisation, role }) {
  switch (role) {
    case r.HQ:
      return User.findHqDashboard(organisation);
    default:
      throw Boom.forbidden();
  }
}

export default getUserById;
