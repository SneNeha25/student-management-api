import express from 'express';
import dotenv from 'dotenv';

import { teachers } from '../../data.js';

const router = express.Router();

dotenv.config();

// Get teacher by ID
router.get('/get/:id', async (req, res) => {
  const id = req.params.id;

  const teacher = teachers.find((teacher) => teacher.teacherId == id);

  if (teacher) {
    return res.status(200).json(teacher);
  } else {
    return res.status(404).json({ message: 'Teacher not found' });
  }
});

// Get teacher by email
router.get('/get-email/:email', async (req, res) => {
  const email = req.params.email;

  const teacher = teachers.find((teacher) => teacher.email == email);

  if (teacher) {
    return res.status(200).json(teacher);
  } else {
    return res.status(404).json({ message: 'Teacher not found' });
  }
});

// Get teacher by phone
router.get('/get-phone/:phone', async (req, res) => {
  const phone = req.params.phone;

  const teacher = teachers.find((teacher) => teacher.phone == phone);

  if (teacher) {
    return res.status(200).json(teacher);
  } else {
    return res.status(404).json({ message: 'Teacher not found' });
  }
});

// Get teacher by nic
router.get('/get-nic/:nic', async (req, res) => {
  const nic = req.params.nic;

  const teacher = teachers.find((teacher) => teacher.NIC == nic);

  if (teacher) {
    return res.status(200).json(teacher);
  } else {
    return res.status(404).json({ message: 'Teacher not found' });
  }
});

//Get teacher by subject
router.get('/get-by-subject/:subject', async (req, res) => {
  const subject = req.params.subject;

  const teacherslist = teachers.filter((teacher) => teacher.teachingSubject == subject);
  if (teacherslist) {
    return res.status(200).json(teacherslist);
  } else {
    return res.status(404).json({ message: 'Teacher not found' });
  }
});

//Get all teachers
router.get('/get', async (req, res) => {
  return res.status(200).json(teachers);
});

export default router;
