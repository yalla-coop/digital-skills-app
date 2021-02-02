import * as Activity from '../use-cases';

const getActivityById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const activity = await Activity.getActivityById({ id });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default getActivityById;
