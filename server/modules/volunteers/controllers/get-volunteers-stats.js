import * as Volunteers from '../use-cases';

const getVolunteersStats = async (req, res, next) => {
  try {
    const volunteersStats = await Volunteers.getVolunteersStats(req.user);
    res.json(volunteersStats);
  } catch (error) {
    next(error);
  }
};

export default getVolunteersStats;
