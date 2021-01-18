import * as CheckIn from '../use-cases';

const getCheckInById = async (req, res, next) => {
  try {
    const checkIn = await CheckIn.getCheckInById();
    res.json(checkIn);
  } catch (error) {
    next(error);
  }
};

export default getCheckInById;
