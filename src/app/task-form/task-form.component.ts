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

  onSaveClicked(): void {
    console.log('Task saved');
  }
}
