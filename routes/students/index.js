import express from 'express';
import dotenv from 'dotenv';

import { students } from '../../data.js';

const router = express.Router();

dotenv.config();

// Get student by ID
router.get('/get/:id', async (req, res) => {
  const id = req.params.id;

  const student = students.find((student) => student.studentId == id);

  if (student) {
    return res.status(200).json(student);
  } else {
    return res.status(404).json({ message: 'Student not found' });
  }
});

//Get all students
router.get('/get', async (req, res) => {
  return res.status(200).json(students);
});

export default router;
