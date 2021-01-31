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

const getSkills = async ({ areas, type, options }) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}`, {
      params: { areas, type: type },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getHqSkillsProgress = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}/progress`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const SearchSkillsAndActivities = async ({ task, tool, options }) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}/search`, {
      params: { task, tool },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getUserSkillsStats = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}/stats`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getMostPopularTasks = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${SKILLS_BASE}/popular`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  getSkillById,
  SearchSkillsAndActivities,
  getMostPopularTasks,
  getUserSkillsStats,
  getHqSkillsProgress,
  getSkills,
};
