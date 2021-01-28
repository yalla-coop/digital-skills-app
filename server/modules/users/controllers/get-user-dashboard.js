import * as User from '../use-cases';

const getUserDashboard = async (req, res, next) => {
  const { user } = req;
  try {
    const results = await User.getUserDashboard(user);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default getUserDashboard;
