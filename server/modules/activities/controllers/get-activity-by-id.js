import * as Activity from '../use-cases';

const getActivityById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = await Activity.getActivityById({
      id,
      roles: req.user ? req.user.role : null,
    });
    res.json(activity);
  } catch (error) {
    next(error);
  }
};

export default getActivityById;
