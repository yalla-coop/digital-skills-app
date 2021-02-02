import * as Activity from '../model';

const getActivityById = ({ id }) => {
  return Activity.findActivityById(id);
};

export default getActivityById;
