import { Router } from 'express';

import getSkillById from './get-skill-by-id';

const router = Router();

router.get('/:id', getSkillById);

export default router;
