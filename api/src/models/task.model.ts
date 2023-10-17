import { mongoose, db } from './db.connection';

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  tags: [String],
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

// Define the Task model
export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  tags: string[];
  priority: 'Low' | 'Medium' | 'High';
  createdAt: Date;
  updatedAt?: Date;
}

const TaskModel = mongoose.model<ITask>('Task', taskSchema, 'tasks');

export default TaskModel;
