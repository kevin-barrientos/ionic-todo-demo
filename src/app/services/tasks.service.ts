import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      title: 'Task 1',
      dueDate: new Date().toISOString(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Task 2',
      dueDate: new Date().toISOString(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'Task 3',
      dueDate: new Date().toISOString(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  constructor() { }

  add(task: Task): void {
    this.tasks.push(task);
  }
}
