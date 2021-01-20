import axios from 'axios';
import handleError from './format-error';

const ACTIVITIES_BASE = '/activities';

const getActivityById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getActivityById };
