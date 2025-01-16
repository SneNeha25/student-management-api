import express from 'express';
import dotenv from 'dotenv';

import { families } from '../../data.js';

const router = express.Router();

dotenv.config();

// Get family by ID
router.get('/get/:id', async (req, res) => {
  const id = req.params.id;

  const family = families.find((family) => family.familyId == id);

  if (family) {
    return res.status(200).json(family);
  } else {
    return res.status(404).json({ message: 'Family not found' });
  }
});

//Get all families
router.get('/get', async (req, res) => {
  return res.status(200).json(families);
});

export default router;
