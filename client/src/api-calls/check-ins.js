import axios from 'axios';
import handleError from './format-error';

const CHECK_INS_BASE = '/check-ins';

const createCheckIn = async ({ body, options }) => {
  try {
    const { data } = await axios.post(`${CHECK_INS_BASE}`, body);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { createCheckIn };
