import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, delay, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NameValidator implements AsyncValidator {

  public nameExist?: boolean;

  constructor(private authService: AuthService){ }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const name = control.value;

    const http = new Observable<ValidationErrors | null>(subscriber => {

      this.verifiedUserName(name)
      .subscribe(name => {
          if (this.nameExist){
            subscriber.next({nameTaken: true})
            subscriber.complete()
          }

          subscriber.next(null)
          subscriber.complete()

        })
    })
    .pipe(
      delay(2000)
    );

    return http;
  }

  verifiedUserName(name: string){

    return this.authService.getUsers()
      .pipe(
        map(users => users.find(user => user.name === name)),
        tap(user => {
          user ? this.nameExist = true : this.nameExist = false;

          return user;
        })
      )
  }

}
