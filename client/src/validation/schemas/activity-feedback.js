import { fields, createSchema, validate as _validate } from '..';

const { requiredField } = fields;

const activityFeedback = createSchema({
  completionTime: requiredField,
  difficulty: requiredField,
  confidenceScore: requiredField,
});

const validate = (data) => _validate(activityFeedback, data);

export default validate;
