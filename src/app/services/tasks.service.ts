import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$: Subject<Task[]> = new BehaviorSubject([]);

  private _tasks: Task[];

  constructor(private httpClient: HttpClient) {}

  add(task: Task): void {
    this._tasks.push(task);
    this.tasks$.next([...this._tasks]);
  }

  remove(task: Task): void {
    // Esto funcionara, sin embargo no es un caso real ya que comunmente
    // la referencia del objeto cambiara. Ademas no es buena practica
    // que las listas sean mutables.

    // const i = this.tasks.findIndex(t => t === task);
    // this.tasks.splice(i, 1);

    this._tasks = this._tasks.filter(t => t !== task);
    this.tasks$.next([...this._tasks]);
  }

  fetch(): void {
    this.httpClient
      .get<any[]>('https://todo-backend-typescript.herokuapp.com/')
      .pipe(
        map(its =>
          its.map(it => ({
            title: it.title,
            dueDate: new Date().toISOString(),
            description: 'remote',
          })),
        ),
      )
      .subscribe(its => {
        this._tasks = its;
        this.tasks$.next([...this._tasks]);
      });
  }
}
