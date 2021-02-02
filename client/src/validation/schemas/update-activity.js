import { fields, createSchema, validate as _validate } from '..';

const {
  requiredField,
  levelField,
  timeField,
  TitleField,
  descriptionField,
  creatorField,
  linkField,
} = fields;

const updateActivity = createSchema({
  title: TitleField,
  description: descriptionField,
  skills: requiredField,
  level: levelField,
  time: timeField,
  link: linkField,
  creator: creatorField,
});

const validate = (data) => _validate(updateActivity, data);

export default validate;
