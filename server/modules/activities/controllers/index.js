import { Router } from 'express';
import { authenticate, authorize } from '../../../api/middlewares';
import { userRoles } from '../../../constants/data-types';

import getActivityById from './get-activities-by-id';
import getActivities from './get-activities';
import getCompletedActivitiesById from './get-completed-activities-by-id';
import getRelatedActivities from './get-related-activities';
import getRelatedActivitiesByUser from './get-related-activities-by-user';
import getUserActivityProgress from './get-user-activity-progress';
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
router.get('/:id', getActivityById);
router.get('/', authenticate(true), getActivities);

router.post(
  '/:id/complete',
  authenticate(),
  authorize([userRoles.VOLUNTEER]),
  createCompletedActivity,
);

export default router;
