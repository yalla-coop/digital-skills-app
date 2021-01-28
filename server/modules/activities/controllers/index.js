import { Router } from 'express';
import { authenticate, authorize } from '../../../api/middlewares';
import { userRoles } from '../../../constants';

import getActivityById from './get-activities-by-id';
import getActivities from './get-activities';

const router = Router();

router.get('/:id', getActivityById);
router.get('/', authenticate(), authorize([userRoles.HQ]), getActivities);

export default router;
