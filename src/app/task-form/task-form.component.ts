import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSaveClicked(title: string, dueDate: string, desc: string): void {
    console.log('Task form values', {title, dueDate, desc});
  }
}
