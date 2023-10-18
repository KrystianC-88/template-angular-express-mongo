import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/services/todo.models';
import { TaskService } from 'src/app/services/todo.service';
import { TaskFormComponent } from 'src/app/components/form/task/task.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: TaskInterface[] = [];
  constructor(private service: TaskService){}

  ngOnInit(){
    this.service.getTasks().subscribe((data: TaskInterface[]) => {
      this.tasks = data;
    });

    this.service.tasksUpdated$.subscribe(() => {
      this.refreshTasks();
    });
  }

  handleFormSubmit($event: any) {
    console.log($event);

    this.service.addTask($event).subscribe((data) => {
      console.log("Task created:", data);

    });
  }

  taskDelete(task: TaskInterface){
    this.service.deleteTask(task._id).subscribe(() => {
    });
  }

  taskEdit(task: TaskInterface){
    return;
  }

  // Refresh the tasks from the service
  private refreshTasks() {
    this.service.getTasks().subscribe((data: TaskInterface[]) => {
      this.tasks = data;
    });
  }
}
