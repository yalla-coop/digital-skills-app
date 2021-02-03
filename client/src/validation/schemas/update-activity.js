import { fields, createSchema, validate as _validate } from '..';

const {
  requiredField,
  levelField,
  timeField,
  TitleField,
  descriptionField,
  creatorField,
  urlRequired,
} = fields;

const updateActivity = createSchema({
  title: TitleField,
  description: descriptionField,
  skills: requiredField,
  difficulty: levelField,
  completionTime: timeField,
  resourceLink: urlRequired,
  resourceCreatedBy: creatorField,
});

const validate = (data) => _validate(updateActivity, data);

export default validate;
