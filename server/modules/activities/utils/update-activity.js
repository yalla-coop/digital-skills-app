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

const updateActivity = createSchema({
  id, // activity id
  skills: arrayOfIds,
  title: activityTitle,
  description: activityDescription,
  difficulty,
  completionTime,
  resourceLink: urlRequired,
  resourceCreatedBy: requiredField,
});

const validate = (data) => {
  return _validate(updateActivity, data);
};

export default validate;
