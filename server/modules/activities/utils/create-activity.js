import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const {
  arrayOfIds,
  activityTitle,
  activityDescription,
  difficulty,
  completionTime,
  urlRequired,
  requiredField,
  id,
} = fields;

const createActivity = createSchema({
  skills: arrayOfIds,
  title: activityTitle,
  description: activityDescription,
  difficulty,
  completionTime,
  resourceLink: urlRequired,
  resourceCreatedBy: requiredField,
  userId: id,
});

const validate = (data) => {
  return _validate(createActivity, data);
};

export default validate;
