import * as Organisation from '../model';

const getOrganisations = () => {
  return Organisation.findOrganisations();
};

export default getOrganisations;
