import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class UsersLSService {

  constructor(private router: Router) {
    this.users= JSON.parse(localStorage.getItem('users')!) || [];
   }

  user: User= {
      id: '',
      name: '',
      age: 0,
      color: '',
      isWork: false,
      email: '',
      password: ''
    };

  users!: User[];


  saveUserLS(user: User) {
    const newUser: User = {
      id: uuid(), ...user
    }
    this.user = newUser;
    if (this.existUserLS(newUser.email)) {//problema en setting
      alert('El usuario ya existe');
      this.router.navigate(['/login'])
    } else {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  loginUserLS(email: string, password: string) {
    if (this.existUserLS(email)) {
      const user = this.users.find(user => user.email === email)!;
      if(user.password === password){
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.router.navigate(['/home']);
        console.log(this.user);
      }
    } else {
      alert('El usuario no existe');
      this.router.navigate(['/register'])
    }

  }

  getUserLS(): User {

    return JSON.parse(localStorage.getItem('user')!);
  }

  saveChangesUserLS(changesUser: User){
    if(localStorage.getItem('users') === null) localStorage.setItem('users',JSON.stringify([]));
    const usersList: User[] = JSON.parse(localStorage.getItem('users')!);
    for (let i = 0; i < usersList.length; i++) {
      if(usersList[i].email === changesUser.email) {
        usersList.splice(i, 1, changesUser);
      }
    }
    localStorage.setItem('users', JSON.stringify(usersList));
    localStorage.setItem('user', JSON.stringify(changesUser));

  }

  deleteUserLS() {
    localStorage.removeItem('user');

    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email + "  - " + this.user.email)
      if(this.users[i].email === this.user.email) {
        this.users.splice(i, 1 );
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  deleteSessionLS() {
    localStorage.removeItem('user');

  }

  existUserLS(email: string): boolean {
    // if(localStorage.getItem('users') === null) localStorage.setItem('users',JSON.stringify([]));

    // const usersList: User[] = JSON.parse(localStorage.getItem('users')!);

    const exist = this.users.find(user => user.email === email);
    return exist !== undefined;
  }

}
