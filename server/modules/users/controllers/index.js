import { Router } from 'express';

import getUserById from './get-user-by-id';
import signup from './signup';
import login from './login';
import logout from './logout';
import getUserInfo from './get-user-info';
import { authenticate } from '../../../api/middlewares';

const router = Router();

router.get('/my-info', authenticate(), getUserInfo);
router.get('/:id', getUserById);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
