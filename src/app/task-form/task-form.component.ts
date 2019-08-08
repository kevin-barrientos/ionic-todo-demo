import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

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

  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

  onSaveClicked(task: any): void {
    this.tasksService.add(task);
    this.task = { title: '', dueDate: '', description: '' };
  }
}
