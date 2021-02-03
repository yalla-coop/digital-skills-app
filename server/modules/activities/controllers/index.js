import { Router } from 'express';
import { authenticate, authorize } from '../../../api/middlewares';

import getActivityById from './get-activity-by-id';
import getActivities from './get-activities';
import getCompletedActivitiesById from './get-completed-activities-by-id';
import getRelatedActivities from './get-related-activities';
import getRelatedActivitiesByUser from './get-related-activities-by-user';
import getUserActivityProgress from './get-user-activity-progress';
import createActivity from './create-activity';
import updateActivity from './update-activity';
import { userRoles } from '../../../constants';
import createCompletedActivity from './create-completed-activity';

import updateActivityWithFeedback from './update-activity-with-feedback';

const router = Router();

router.patch('/feedback', authenticate(true), updateActivityWithFeedback);

router.get(
  '/completed',
  authenticate(),
  authorize([userRoles.VOLUNTEER]),
  getCompletedActivitiesById,
);
router.get(
  '/progress',
  authenticate(),
  authorize([userRoles.VOLUNTEER]),
  getUserActivityProgress,
);
router.get(
  '/my-related',
  authenticate(),
  authorize([userRoles.VOLUNTEER]),
  getRelatedActivitiesByUser,
);
router.get('/related', getRelatedActivities);
router.get('/:id', authenticate(true), getActivityById);
router.patch('/:id', authenticate(), authorize([userRoles.HQ]), updateActivity);
router.get('/', authenticate(true), getActivities);
router.post('/', authenticate(), authorize([userRoles.HQ]), createActivity);

router.post(
  '/:id/complete',
  authenticate(),
  authorize([userRoles.VOLUNTEER]),
  createCompletedActivity,
);

export default router;
