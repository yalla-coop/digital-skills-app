import { Router } from 'express';

import getHqSkillAreas from './get-hq-skill-areas';
import getSkillAreaById from './get-skill-area-by-id';
import { authenticate, authorize } from '../../../api/middlewares';
import { userRoles } from '../../../constants';

const router = Router();

const { HQ } = userRoles;

router.get('/', authenticate(), authorize([HQ]), getHqSkillAreas);
router.get('/:id', authenticate(), authorize([HQ]), getSkillAreaById);

export default router;
