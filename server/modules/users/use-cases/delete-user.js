import Boom from '@hapi/boom';
import * as User from '../model';
import { userRoles as r } from '../../../constants';

function deleteUser({ id, role }) {
  switch (role) {
    case r.VOLUNTEER:
      return Promise.all([
        User.deleteUserCredentials(id),
        User.deleteVolunteerFromOrg(id),
      ]);
    case r.HQ:
      return User.deleteUserCredentials(id);

    default:
      throw Boom.forbidden();
  }
}

export default deleteUser;
