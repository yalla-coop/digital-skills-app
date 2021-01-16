import { verify } from 'jsonwebtoken';
import config from '../../config';
import * as constants from '../../constants';
import { errorMsgs } from '../../services/error-handler';

const { TOKEN_NAME } = constants;

const { secret } = config.server;

// db query
const getUserById = () => {};

module.exports = (isPublic) => async (req, res, next) => {
  // get cookies from the request
  try {
    const { cookies } = req;

    if (!cookies || !cookies[TOKEN_NAME]) {
      if (isPublic) {
        return next();
      }
      throw errorMsgs.UNAUTHENTICATED();
    }

    let decoded;
    try {
      // verify the token
      decoded = await verify(cookies[TOKEN_NAME], secret);
      // if not valid clear token
    } catch (error) {
      res.clearCookie(TOKEN_NAME);
      throw errorMsgs.INVALID_TOKEN();
    }

    // get user Id from token
    const { id } = decoded;
    const user = await getUserById.all(id);

    if (!user) {
      res.clearCookie(TOKEN_NAME);
      throw errorMsgs.INVALID_TOKEN();
    }

    // put the user info in the req to be accessed in the next middlewares
    req.user = user;
    // TODO:SETUP
    // req.sqreen.identify(req, user);
    return next();
  } catch (error) {
    next(error);
  }
};
