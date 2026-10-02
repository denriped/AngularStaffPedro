import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersSubject =
    new BehaviorSubject<User[]>([]);

  readonly users$ =
    this.usersSubject.asObservable();

}