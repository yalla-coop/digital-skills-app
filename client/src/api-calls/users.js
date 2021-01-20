import axios from 'axios';
import handleError from './format-error';

const USERS_BASE = '/users';

const getUserById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getLoggedInUserInfo = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/info`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getUserById, getLoggedInUserInfo };
