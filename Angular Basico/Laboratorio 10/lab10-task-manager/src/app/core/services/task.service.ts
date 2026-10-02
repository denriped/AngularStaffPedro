import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly tasksSubject =
    new BehaviorSubject<Task[]>([]);

  readonly tasks$ =
    this.tasksSubject.asObservable();

}