import axios from 'axios';
import handleError from './format-error';

const SKILL_AREAS_BASE = '/skill-areas';

const getHqSkillAreas = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${SKILL_AREAS_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getHqSkillAreaById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${SKILL_AREAS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getHqSkillAreas, getHqSkillAreaById };
