import { string, number, boolean, array } from 'yup';
import * as errMsgs from './err-msgs';
import { dropdownData } from '../constants';

export const requiredText = string().required(errMsgs.DEFAULT_REQUIRED);

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

export const requiredField = string().required(errMsgs.DEFAULT_REQUIRED);

export const optionalFiled = string()
  .typeError(errMsgs.DEFAULT_REQUIRED)
  .nullable();

export const skillTitle = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(200, errMsgs.TOO_LONG_MAX_200);

export const skillDescription = string()
  .required(errMsgs.DEFAULT_REQUIRED)
  .max(300, errMsgs.TOO_LONG_MAX_300);

export const skillTask = string().nullable().max(50, errMsgs.TOO_LONG_MAX_50);

export const taskSearchInput = string().when('tool', (tool, schema) =>
  tool === dropdownData.A_DIGITAL_TOOL
    ? schema.required(errMsgs.DEFAULT_REQUIRED)
    : schema.nullable()
);

export const levelField = number()
  .typeError(errMsgs.NUMBER_REQUIRED)
  .min(1)
  .max(4)
  .required(errMsgs.DEFAULT_REQUIRED);

export const timeField = number()
  .typeError(errMsgs.NUMBER_REQUIRED)
  .min(1)
  .max(1000)
  .required(errMsgs.DEFAULT_REQUIRED);

export const TitleField = string()
  .max(200, errMsgs.TOO_LONG_MAX_200)
  .required(errMsgs.DEFAULT_REQUIRED);

export const creatorField = string()
  .max(50, errMsgs.TOO_LONG_MAX_50)
  .required(errMsgs.DEFAULT_REQUIRED);

export const urlRequired = string()
  .matches(
    /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#.-]+)*\/?(\?[a-zA-Z0-9-_.-]+=[a-zA-Z0-9-%?&=.-]+&?)?$/,
    {
      message: errMsgs.INVALID_LINK,
    }
  )
  .required(errMsgs.DEFAULT_REQUIRED);

export const descriptionField = string()
  .max(500, errMsgs.TOO_LONG_MAX_500)
  .required(errMsgs.DEFAULT_REQUIRED);
