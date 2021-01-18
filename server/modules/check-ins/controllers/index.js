import { Router } from 'express';

import getCheckInById from './get-check-in-by-id';

const router = Router();

router.get('/:id', getCheckInById);

export default router;
