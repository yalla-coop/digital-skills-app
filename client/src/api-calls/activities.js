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

const getActivitiesBySkillId = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}`, {
      params: { skillId: id },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getCompletedActivitiesById = async ({ skillId, activityId }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}/completed`, {
      params: { skillId, activityId },
    });
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const getRelatedActivities = async ({ skillId, activityId }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}/related`, {
      params: { skillId, activityId },
    });
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const getRelatedActivitiesByUser = async ({ skillId, activityId }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}/my-related`, {
      params: { skillId, activityId },
    });
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const getUserActivityProgress = async ({ activityId }) => {
  try {
    const { data } = await axios.get(`${ACTIVITIES_BASE}/progress`, {
      params: { activityId },
    });
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const createActivity = async ({ form, options }) => {
  try {
    const { data } = await axios.post(`${ACTIVITIES_BASE}`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updateActivityWithFeedback = async ({ activityId, feedback }) => {
  try {
    const { data } = await axios.patch(
      `${ACTIVITIES_BASE}/feedback`,
      feedback,
      {
        params: { activityId },
      }
    );
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const updateActivity = async ({ id, form, options }) => {
  try {
    const { data } = await axios.patch(`${ACTIVITIES_BASE}/${id}`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const completeActivity = async ({ activityId, options }) => {
  try {
    const { data } = await axios.post(
      `${ACTIVITIES_BASE}/${activityId}/complete`
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  getActivityById,
  getActivitiesBySkillId,
  getCompletedActivitiesById,
  getRelatedActivities,
  getRelatedActivitiesByUser,
  getUserActivityProgress,
  createActivity,
  updateActivity,
  updateActivityWithFeedback,
  completeActivity,
};
