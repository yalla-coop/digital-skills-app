import axios from 'axios';
import handleError from './format-error';

const SKILLS_BASE = '/skills';

const getSkillById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getSkillById };
