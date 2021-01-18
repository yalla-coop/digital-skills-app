import * as Activity from '../use-cases';

const getActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.getActivityById();
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default getActivityById;
