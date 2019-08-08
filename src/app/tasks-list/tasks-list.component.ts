import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  @Input() tasks: any[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

  onDoneClicked(task: Task): void {
    this.tasksService.remove(task);
  }
}
