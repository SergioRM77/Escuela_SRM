import { catchError, exhaustAll, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            map(resp => resp.response['token']),
            catchError(err => of('token no válido'))
        )


// crear formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones https://reqres.in/
inputEmail.type= 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type= 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';


submitBtn.innerHTML = 'Ingresar';
form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Stream
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit')
    .pipe(
        tap(ev => ev.preventDefault()),
        map(ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        // mergeMap crea muchas solicitudes
        // mergeMap( peticionHttpLogin )

        // switchMap cancela peticiones anteriores al volver a hacer click
        // switchMap( peticionHttpLogin )
        
        // exhaustMap no hace caso a las nuevas peticiones hasta completarse
        exhaustMap( peticionHttpLogin )
    );

submitForm$.subscribe(token => {
    console.log(token);
})