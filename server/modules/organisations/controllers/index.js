import { Router } from 'express';

import getOrganisationById from './get-organisation-by-id';
import getOrganisations from './get-organisations';

const router = Router();

router.get('/:id', getOrganisationById);
router.get('/', getOrganisations);

export default router;
