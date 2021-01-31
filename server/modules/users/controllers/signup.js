import * as User from '../use-cases';
import { userRoles } from '../../../constants';
import { createToken } from '../../../helpers';

const signup = async (req, res, next) => {
  try {
    const {
      email,
      password,
      fullName,
      postcode,
      role,
      organisations,
      selectedPath,
      assessmentScore,
      skillsUserHas,
      skillAreas,
    } = req.body;

    let user;

    if (role === userRoles.VOLUNTEER) {
      user = await User.volunteerSignup({
        email,
        password,
        fullName,
        postcode,
        role,
        organisations,
        selectedPath,
        assessmentScore,
        skillsUserHas,
        skillAreas,
      });
    } else if (role === userRoles.HQ) {
      user = await User.hqSignup({
        email,
        password,
        fullName,
        role,
      });
    }

    const { token, tokenName, options } = createToken({ id: user.id });
    res.cookie(tokenName, token, options);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export default signup;
