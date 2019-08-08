import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

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

  onTaskSubmitted(task: any): void {
    this.tasks.push(task);
  }
}
