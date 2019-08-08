import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() submitted: EventEmitter<any> = new EventEmitter();

  task: {
    title: string,
    dueDate: string,
    description: string,
  } =  {
    title: '',
    dueDate: '',
    description: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSaveClicked(task: any): void {
    this.submitted.emit(task);
    this.task = {title: '', dueDate: '', description: ''};
  }
}
