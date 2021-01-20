import * as Organisation from '../use-cases';

const getOrganisationById = async (req, res, next) => {
  try {
    const organisation = await Organisation.getOrganisationById();
    res.json(organisation);
  } catch (error) {
    next(error);
  }
};

export default getOrganisationById;
