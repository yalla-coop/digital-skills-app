import { Router } from 'express';

import { authenticate, authorize } from '../../../api/middlewares';

import getSkillById from './get-skill-by-id';
import getSkills from './get-skills';
import getHQSkillProgress from './get-hq-skill-progress';
import { userRoles } from '../../../constants';
import getSkillsAndActivitiesSearch from './get-skills-and-activities-search';
import getSkillsAndActivitiesPopular from './get-skills-and-activities-popular';
import getSkillsStats from './get-skills-stats';
import updateSkill from './update-skill';

const router = Router();

const { HQ } = userRoles;

router.get('/stats', authenticate(), getSkillsStats);
router.get('/progress', authenticate(), authorize([HQ]), getHQSkillProgress);
router.get('/popular', getSkillsAndActivitiesPopular);
router.get('/search', getSkillsAndActivitiesSearch);
router.get('/', authenticate(true), getSkills);
router.get('/:id', authenticate(true), getSkillById);
router.patch('/:id', authenticate(), authorize([HQ]), updateSkill);

export default router;
