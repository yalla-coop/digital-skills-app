import Boom from '@hapi/boom';
import * as User from '../model';
import { hashPassword } from '../../../helpers';
import { errorMsgs } from '../../../services/error-handler';
import { validateSignup } from '../utils';

const hqSignup = async ({ email, password, fullName, postcode, role }) => {
  await validateSignup({
    email,
    password,
    fullName,
    postcode,
    role,
  });

  const userWithSameEmail = await User.findUserByEmail(email);
  if (userWithSameEmail) {
    throw Boom.conflict(errorMsgs.EMAIL_ALREADY_USED, { field: 'email' });
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.createUser({
    email,
    password: hashedPassword,
    fullName,
    postcode,
    role,
  });

  return user;
};

export default hqSignup;
