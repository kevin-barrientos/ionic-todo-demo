import { Component } from '@angular/core';

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  tasks: any[] = [
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
}
