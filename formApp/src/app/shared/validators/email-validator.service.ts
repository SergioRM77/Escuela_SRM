import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{
  constructor() { }


  validate(control: AbstractControl<any, any>): Observable <ValidationErrors | null> {

    const email = control.value;
    console.log({email})

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      if(email === 'fede@google.com'){
        subscriber.next({emailTaken: true});
      } else{
        subscriber.next(null)
      }
      subscriber.complete();

    }).pipe(
      delay(2000)
    );

    return httpCallObservable;
  }


  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({email})

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }


}
