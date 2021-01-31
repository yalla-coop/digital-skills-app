import { fields, createSchema, validate as _validate } from '..';

const { skillTitle, skillDescription, skillTask } = fields;

const updateSkill = createSchema({
  title: skillTitle,
  description: skillDescription,
  task1: skillTask,
  task2: skillTask,
  task3: skillTask,
});

const validate = (data) => _validate(updateSkill, data);

export default validate;
