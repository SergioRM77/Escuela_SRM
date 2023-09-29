import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class UsersLSService {
  constructor() { }
  public user: User = {
    id: '',
    name: '',
    age: 0,
    color: '',
    isWork: false,
    email: '',
    password: ''
  };

  public saveUserLS(user: User) {
    const newUser: User = {
      id: uuid(), ...user
    }
    this.user = newUser;
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserLS(): User {
    return JSON.parse(localStorage.getItem('user')!);
  }

  public deleteUserLS() {
    localStorage.removeItem('user');
  }
}
