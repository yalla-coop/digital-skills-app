import { fields, createSchema, validate as _validate } from '..';

const { requiredField, optionalFiled } = fields;

const updateSkill = createSchema({
  title: requiredField,
  description: requiredField,
  task1: optionalFiled,
  task2: optionalFiled,
  task3: optionalFiled,
});

const validate = (data) => _validate(updateSkill, data);

export default validate;
