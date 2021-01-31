import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { skillTitle, skillDescription, skillTask } = fields;

const editSkill = createSchema({
  title: skillTitle,
  description: skillDescription,
  task1: skillTask,
  task2: skillTask,
  task3: skillTask,
});

const validate = (data) => _validate(editSkill, data);

export default validate;
