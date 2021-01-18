import { Router } from 'express';

import getUserById from './get-user-by-id';

const router = Router();

router.get('/:id', getUserById);

export default router;
