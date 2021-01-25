import Boom from '@hapi/boom';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';
import { userRoles } from '../../../constants';
import { errorMsgs } from '../../../services/error-handler';

const {
  email,
  password,
  fullName,
  postcode,
  organisations,
  selectedPath,
  assessmentScore,
} = fields;

const volunteerSignUp = createSchema({
  email,
  password,
  fullName,
  postcode,
  organisations,
  selectedPath,
  assessmentScore,
});

const hqSignUp = createSchema({
  email,
  password,
  fullName,
});

const validate = (data) => {
  if (data.role === userRoles.VOLUNTEER)
    return _validate(volunteerSignUp, data);

  if (data.role === userRoles.HQ) return _validate(hqSignUp, data);
  throw Boom.badData(errorMsgs.INVALID_USER_ROLE);
};

export default validate;
