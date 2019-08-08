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

  remove(task: Task): void {

    // Esto funcionara, sin embargo no es un caso real ya que comunmente
    // la referencia del objeto cambiara. Ademas no es buena practica
    // que las listas sean mutables.

    // const i = this.tasks.findIndex(t => t === task);
    // this.tasks.splice(i, 1);

    this.tasks = this.tasks.filter(t => t !== task);
    console.log('TASKS', this.tasks);
  }
}
