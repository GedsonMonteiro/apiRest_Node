import { Router } from 'express';
const router = Router();

import { createTask, getTasks, deleteTask, updateTask, getOneTask, getTasksByProject } from '../controllers/task.controller';

router.post('/', createTask);
router.post('/', getTasks);

router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/:id', getOneTask);

router.get('/project/:projectid', getTasksByProject);

export default router;