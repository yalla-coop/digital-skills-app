import { string } from 'yup';
import * as errMsgs from './err-msgs';

export const firstName = string()
  .min(1)
  .max(20)
  .required(errMsgs.DEFAULT_REQUIRED);
