import * as Organisation from '../model';

const getOrganisationById = ({ id }) => {
  return Organisation.findOrganisationById(id);
};

export default getOrganisationById;
