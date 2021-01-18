import { Router } from 'express';

import getOrganisationById from './get-organisation-by-id';

const router = Router();

router.get('/:id', getOrganisationById);

export default router;
