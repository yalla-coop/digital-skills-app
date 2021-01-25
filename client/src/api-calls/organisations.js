import axios from 'axios';
import handleError from './format-error';

const ORGANISATIONS_BASE = '/organisations';

const getOrganisationById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${ORGANISATIONS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getOrganisations = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${ORGANISATIONS_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getOrganisationById, getOrganisations };
