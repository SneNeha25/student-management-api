import express from 'express';
const router = express.Router();

import Students from './students/index.js';
import admins from './admins/index.js';

router.use('/students', Students);
router.use('/admins', admins);

export default router;
