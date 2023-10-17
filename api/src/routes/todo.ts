import { Router } from 'express';
import { db } from '../models/db.connection'; // Import the db module and mongoose instance
import TaskModel, { ITask } from '../models/task.model'; // Import the Task model

const router = Router();

// Create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, completed, dueDate, tags, priority } = req.body;
    const task = new TaskModel({ title, description, completed, dueDate, tags, priority });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error creating a task' });
  }
});

// Retrieve all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving tasks' });
  }
});

// Retrieve a specific task by ID
router.get('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await TaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving the task' });
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the task' });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await TaskModel.findByIdAndRemove(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the task' });
  }
});

export default router;
