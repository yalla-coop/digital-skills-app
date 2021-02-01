import { fields, createSchema, validate as _validate } from '..';

const { requiredField } = fields;

const updateActivity = createSchema({
  title: requiredField,
  description: requiredField,
  skills: requiredField,
  level: requiredField,
  time: requiredField,
  link: requiredField,
  creator: requiredField,
});

const validate = (data) => _validate(updateActivity, data);

export default validate;
