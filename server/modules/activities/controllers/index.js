import { Router } from 'express';
import { authenticate } from '../../../api/middlewares';

import getActivityById from './get-activities-by-id';
import getActivities from './get-activities';

const router = Router();

router.get('/:id', getActivityById);
router.get('/', authenticate(true), getActivities);

export default router;
