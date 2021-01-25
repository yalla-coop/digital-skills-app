import { Router } from 'express';
import Boom from '@hapi/boom';

import { users, checkIns, skills, activities, organisations } from '../modules';

const router = Router();

router.use('/users', users.controllers);
router.use('/check-ins', checkIns.controllers);
router.use('/skills', skills.controllers);
router.use('/activities', activities.controllers);
router.use('/organisations', organisations.controllers);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(Boom.notFound());
});

export default router;
