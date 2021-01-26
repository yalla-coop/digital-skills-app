import axios from 'axios';
import handleError from './format-error';

const VOLUNTEERS_BASE = '/volunteers';

const getVolunteersStats = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${VOLUNTEERS_BASE}/stats`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getVolunteersStats };
