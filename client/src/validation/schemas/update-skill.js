import { fields, createSchema, validate as _validate } from '..';

const { skillTitle, descriptionField, skillTask, requiredField } = fields;

const updateSkill = createSchema({
  title: skillTitle,
  description: descriptionField,
  icon: requiredField,
  task1: skillTask,
  task2: skillTask,
  task3: skillTask,
});

const validate = (data) => _validate(updateSkill, data);

export default validate;
