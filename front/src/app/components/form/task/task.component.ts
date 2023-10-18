import { Component, EventEmitter, Input, Output } from '@angular/core';


interface TaskFormInterface {
  title: string;
  description?: string;
  tags: string[];
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}

@Component({
  selector: 'app-form-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskFormComponent {
  // @Input() task: TaskFormInterface; // Input task from parent component
  task: TaskFormInterface;
  @Output() onSubmit: EventEmitter<TaskFormInterface> = new EventEmitter<TaskFormInterface>();

  priorities: string[] = ['Low', 'Medium', 'High']; // Priority options

  constructor() {
    this.task = {
      title: '',
      description: '',
      tags: [],
      priority: 'Low',
      completed: false
    };
  }

  // Function to submit the form
  submitForm() {
    console.info('before submit event:', [this.task]);
    this.onSubmit.emit(this.task);
    this.resetForm();
  }

  // Function to reset the form
  resetForm() {
    this.task = {
      title: '',
      description: '',
      tags: [],
      priority: 'Low',
      completed: false
    };
  }
}
