import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    title: '',
    dueDate: '',
    description: '',
  };

  constructor(
    private tasksService: TasksService,
    private router: Router,
  ) {}

  ngOnInit() {}

  onSaveClicked(task: any): void {
    this.tasksService.add(task);
    this.task = { title: '', dueDate: '', description: '' };
    this.router.navigate(['tasks']).then(/*ignore*/);
  }
}
