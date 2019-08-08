import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasks: any[] = [];

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.tasks;
  }
}
