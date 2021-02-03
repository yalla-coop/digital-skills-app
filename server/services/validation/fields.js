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

export const skillTitle = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(200, errMsgs.TOO_LONG_MAX_200);

export const skillDescription = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(300, errMsgs.TOO_LONG_MAX_300);

export const skillTask = string().nullable().max(50, errMsgs.TOO_LONG_MAX_50);

export const requiredField = string().required(errMsgs.DEFAULT_REQUIRED);

export const activityTitle = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(200, errMsgs.TOO_LONG_MAX_200);

export const activityDescription = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(500, errMsgs.TOO_LONG_MAX_500);

export const difficulty = number()
  .max(4)
  .min(1)
  .required(errMsgs.DEFAULT_REQUIRED);

export const completionTime = number()
  .max(1000)
  .min(0)
  .required(errMsgs.DEFAULT_REQUIRED);

export const urlRequired = string()
  .matches(
    /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#.-]+)*\/?(\?[a-zA-Z0-9-_.-]+=[a-zA-Z0-9-%?&=.-]+&?)?$/,
    {
      message: errMsgs.INVALID_LINK,
    },
  )
  .required(errMsgs.DEFAULT_REQUIRED);

export const id = number()
  .min(1)
  .required(errMsgs.DEFAULT_REQUIRED)
  .typeError(errMsgs.DEFAULT_REQUIRED);
