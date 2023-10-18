import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/services/task.model';

@Component({
  selector: 'app-latest-task',
  templateUrl: './latest-task.component.html',
  styleUrls: ['./latest-task.component.css']
})
export class LatestTaskComponent {
  @Input() task!: TaskInterface;
}
