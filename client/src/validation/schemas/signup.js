import { fields, createSchema, validate as _validate } from '..';

import { roles } from '../../constants';

const { VOLUNTEER, HQ } = roles;
const {
  email,
  password,
  fullName,
  agreedOnTerms,
  arrayOfIds,
  requiredText,
} = fields;

const volunteer = createSchema({
  email,
  fullName,
  password,
  postcode: requiredText,
  organisationsIds: arrayOfIds,
  agreedOnTerms,
});

const hq = createSchema({
  email,
  fullName,
  password,
  agreedOnTerms,
});

const validate = (data) => {
  if (data.role === VOLUNTEER) return _validate(volunteer, data);
  if (data.role === HQ) return _validate(hq, data);
};

export default validate;
