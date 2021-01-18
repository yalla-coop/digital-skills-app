import * as User from '../model';

const getUserById = ({ id }) => {
  return User.findTestById(id);
};

export default getUserById;
