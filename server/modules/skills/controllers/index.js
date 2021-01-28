import { Router } from 'express';

import getSkillById from './get-skill-by-id';
import getHQSkillProgress from './get-hq-skill-progress';
import { authenticate, authorize } from '../../../api/middlewares';
import { userRoles } from '../../../constants';
import getSkillsAndActivitiesSearch from './get-skills-and-activities-search';
import getSkillsAndActivitiesPopular from './get-skills-and-activities-popular';

const router = Router();

const { HQ } = userRoles;
router.get('/progress', authenticate(), authorize([HQ]), getHQSkillProgress);
router.get('/popular', getSkillsAndActivitiesPopular);
router.get('/search', getSkillsAndActivitiesSearch);
router.get('/:id', authenticate(), authorize([HQ]), getSkillById);

export default router;
