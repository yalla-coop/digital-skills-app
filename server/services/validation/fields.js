import { number, string, array } from 'yup';
import * as errMsgs from './err-msgs';
import { learningPaths } from '../../constants';

export const fullName = string()
  .min(1)
  .max(40)
  .required(errMsgs.DEFAULT_REQUIRED);

export const email = string()
  .email(errMsgs.INVALID_EMAIL)
  .required(errMsgs.DEFAULT_REQUIRED);

export const password = string()
  .matches(
    /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/,
    errMsgs.SHORT_PASSWORD,
  )
  .required(errMsgs.DEFAULT_REQUIRED);

export const postcode = string()
  .min(1)
  .max(8)
  .required(errMsgs.DEFAULT_REQUIRED);

export const selectedPath = string().oneOf(Object.values(learningPaths));

export const assessmentScore = number().max(100).min(0);

export const arrayOfIds = array()
  .of(number())
  .min(1)
  .required(errMsgs.DEFAULT_REQUIRED)
  .typeError(errMsgs.DEFAULT_REQUIRED);
