import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'todo-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit, OnDestroy {
  @Input() tasks: any[] = [];

  private tasksSubscription: Subscription;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasksSubscription = this.tasksService.tasks$.subscribe(tasks => this.tasks = tasks);
    this.tasksService.fetch();
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }

  onDoneClicked(task: Task): void {
    this.tasksService.remove(task);
  }
}
