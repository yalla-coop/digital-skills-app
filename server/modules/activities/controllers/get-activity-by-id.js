import * as Activity from '../use-cases';

const getActivityById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.user;
    const activity = await Activity.getActivityById({ id, role });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default getActivityById;
