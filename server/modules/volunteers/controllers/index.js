import { Router } from 'express';

import { authenticate, authorize } from '../../../api/middlewares';
import getVolunteersStats from './get-volunteers-stats';
import { userRoles } from '../../../constants';

const router = Router();

const { HQ } = userRoles;
router.get('/stats', authenticate(), authorize([HQ]), getVolunteersStats);

export default router;
