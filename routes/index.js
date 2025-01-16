import express from 'express';
const router = express.Router();

import Students from './students/index.js';
import families from './families/index.js';
import admins from './admins/index.js';
import teachers from './teachers/index.js';

router.use('/students', Students);
router.use('/admins', admins);
router.use('/admins', admins);
router.use('/teachers', teachers);

export default router;
