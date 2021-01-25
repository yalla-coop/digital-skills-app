import * as Organisation from '../use-cases';

const getOrganisations = async (req, res, next) => {
  try {
    const organisations = await Organisation.getOrganisations();
    res.json(organisations);
  } catch (error) {
    next(error);
  }
};

export default getOrganisations;
