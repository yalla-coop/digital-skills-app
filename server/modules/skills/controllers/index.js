import { Router } from 'express';

import getSkillById from './get-skill-by-id';
import getSkillsAndActivitiesSearch from './get-skills-and-activities-search';
import getSkillsAndActivitiesPopular from './get-skills-and-activities-popular';

const router = Router();

router.get('/popular', getSkillsAndActivitiesPopular);
router.get('/search', getSkillsAndActivitiesSearch);
router.get('/:id', getSkillById);

export default router;
