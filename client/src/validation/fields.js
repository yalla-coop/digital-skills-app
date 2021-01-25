import { string, number, boolean, array } from 'yup';
import * as errMsgs from './err-msgs';

export const fullName = string()
  .min(1, errMsgs.DEFAULT_REQUIRED)
  .max(20)
  .required(errMsgs.DEFAULT_REQUIRED);

export const email = string()
  .email(errMsgs.INVALID_EMAIL)
  .max(50, errMsgs.TOO_LONG_MAX_50)
  .required(errMsgs.DEFAULT_REQUIRED)
  .typeError(errMsgs.DEFAULT_REQUIRED);

export const password = string()
  .matches(
    /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/,
    errMsgs.SHORT_PASSWORD
  )
  .required(errMsgs.DEFAULT_REQUIRED);

export const loginPassword = string().required(errMsgs.DEFAULT_REQUIRED);

export const postcode = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .min(6, errMsgs.TOO_SHORT_MIN_5)
  .max(8, errMsgs.TOO_LONG_MAX_7)
  .matches(
    /\b(([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z])))) [0-9][a-z]{2}\b/gi,
    errMsgs.INVALID_POSTCODE
  );

export const agreedOnTerms = boolean()
  .oneOf([true], errMsgs.SHOULD_AGREE_ON_TERMS)
  .required(errMsgs.DEFAULT_REQUIRED);

export const arrayOfIds = array()
  .of(number())
  .min(1)
  .required(errMsgs.DEFAULT_REQUIRED)
  .typeError(errMsgs.DEFAULT_REQUIRED);
