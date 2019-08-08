import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSaveClicked(title: string, dueDate: string, description: string): void {
    this.submitted.emit({title, dueDate, description});
  }
}
