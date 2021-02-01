import { fields, createSchema, validate as _validate } from '..';

const { requiredText, taskSearchInput } = fields;

const schema = createSchema({
  task: taskSearchInput,
  tool: requiredText,
});

const validate = (data) => _validate(schema, data);

export default validate;
