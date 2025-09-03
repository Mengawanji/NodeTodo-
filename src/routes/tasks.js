// src/routes/tasks.js
import express from 'express';
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import validate from '../middleware/validationMiddleware.js';
import { taskSchema } from '../utils/validationSchemas.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', validate(taskSchema), createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', validate(taskSchema), updateTask);
router.delete('/:id', deleteTask);

export default router;