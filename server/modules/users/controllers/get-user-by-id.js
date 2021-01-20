import * as User from '../use-cases';

const getUserById = async (req, res, next) => {
  try {
    const user = await User.getUserById();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default getUserById;
