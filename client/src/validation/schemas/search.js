import { fields, createSchema, validate as _validate } from '..';

const { requiredText } = fields;

const schema = createSchema({
  task: requiredText,
  tool: requiredText,
});

const validate = (data) => _validate(schema, data);

export default validate;
