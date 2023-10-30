import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // ! al mundo, computamos la señal para que solo se pueda leer
  public currentUser = computed( () => this._currentUser());
  public authStatus = computed( () => this._authStatus());


  constructor() {
    this.checkAuthStatus().subscribe();
   }

  private setAuthentication(user: User, token: string): boolean{
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.autheticated);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string): Observable<boolean>{

    const url = `${this.baseUrl}/auth/login`;
    const body = {email, password};

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({user, token}) => this.setAuthentication(user, token)),
        catchError((err) => throwError(() => err.error.message)
        )
      )

  }

  checkAuthStatus():Observable<boolean>{
    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if(!token) {
      // debemos cambiar el estado a notAuthenticated si no encuentra token
      // this._authStatus.set(AuthStatus.notAutenticated)

      //? O aquí podemos cambiar el AuthSatus a notAutheticated
      //? pero llamar a logout lo hace y limpia por nosotros
      this.logout();

      return of(false)
    };

    // creamos un bearer token
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`);

      // hacemos la petición, mandamos headers y si todo bien retorna true
    return this.http.get<CheckTokenResponse>(url, {headers})
      .pipe(
        map(({user, token}) => this.setAuthentication(user, token)),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAutenticated);
          return of(false)}
          )
      )
  }

  logout(){
      localStorage.removeItem('token');
      this._currentUser.set(null)
      this._authStatus.set(AuthStatus.notAutenticated);

    }




}
