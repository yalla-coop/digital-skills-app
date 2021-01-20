import * as CheckIn from '../model';

const getCheckInById = ({ id }) => {
  return CheckIn.findCheckInById(id);
};

export default getCheckInById;
