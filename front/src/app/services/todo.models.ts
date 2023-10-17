
export interface TaskInterface {
    _id: string;
    title: string;
    description?: string;
    completed: boolean;
    dueDate?: Date;
    tags: string[];
    priority: 'Low' | 'Medium' | 'High';
    createdAt: Date;
    updatedAt?: Date;
}