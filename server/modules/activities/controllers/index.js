import { Router } from 'express';

import getActivityById from './get-activities-by-id';

const router = Router();

router.get('/:id', getActivityById);

export default router;
