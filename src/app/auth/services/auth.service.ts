import { Injectable, inject } from '@angular/core';
import { environments } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, filter, find } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient, private router: Router) { }

  register(userRegister: User){

    return this.http.post<User>(`${this.baseUrl}/users/`,userRegister);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }



  login(name: string, password: string): Observable<User | undefined>{

    return this.getUsers().pipe(
        map(users => users.find(user => user.name === name && user.password === password)),
        tap(user => {
          if(user !== undefined) this.saveSession(name, password)
          return user
        })
      )
  }


  checkAuthentication(): Observable<boolean>{
    if(!localStorage.getItem('session')) return of(false)

    const token = this.nameSession()

    if(token.name === '' || token.pwd === '') return of(false)

    return this.http.get<User>(`${this.baseUrl}/users?name=${token.name}`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(error => of(false))
      )

  }

  logout(){
    this.user = undefined;
    const session = {session: '', pwd: ''}
    localStorage.setItem("session", JSON.stringify(session))
  }

  isValidField(form: FormGroup, field: string) : boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }

  saveSession(user: string, password: string){
    const session = { session: user, pwd: password};
    localStorage.setItem("session", JSON.stringify(session))
  }

  nameSession(){
    return JSON.parse(localStorage.getItem('session')!);
  }
}
