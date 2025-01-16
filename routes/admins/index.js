import express from 'express';
import dotenv from 'dotenv';

import { admins } from '../../data.js';

const router = express.Router();

dotenv.config();

// Get admin by ID
router.get('/get/:id', async (req, res) => {
  const id = req.params.id;

  const admin = admins.find((admin) => admin.adminId == id);

  if (admin) {
    return res.status(200).json(admin);
  } else {
    return res.status(404).json({ message: 'admin not found' });
  }
});

// Get admin by email
router.get('/get-email/:email', async (req, res) => {
  const email = req.params.email;

  const admin = admins.find((admin) => admin.email == email);

  if (admin) {
    return res.status(200).json(admin);
  } else {
    return res.status(404).json({ message: 'admin not found' });
  }
});

// Get admin by phone
router.get('/get-phone/:phone', async (req, res) => {
  const phone = req.params.phone;

  const admin = admins.find((admin) => admin.phone == phone);

  if (admin) {
    return res.status(200).json(admin);
  } else {
    return res.status(404).json({ message: 'admin not found' });
  }
});

//get by level
router.get('/get-by-level/:level', async (req, res) => {
  const level = req.params.level;

  const adminslist = admins.filter((admin) => admin.accessLevel == level);
  if (adminslist) {
    return res.status(200).json(adminslist);
  } else {
    return res.status(404).json({ message: 'admin not found' });
  }
});

//Get all admins
router.get('/get', async (req, res) => {
  return res.status(200).json(admins);
});

export default router;
