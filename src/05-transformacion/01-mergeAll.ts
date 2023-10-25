/**
 * mergeAll(): Convierte un Observable de orden superior en uno
 *  de primer orden que emite las emisiones de los Observables 
 *  internos de forma concurrente.
 *      Se suscribe a un Observable que emite Observables, 
 *      también conocido como Observable de orden superior. 
 *      Cada vez que observa la emisión de uno de los Observables 
 *      internos, se suscribe a él y emite todos los valores del 
 *      Observable interno
 */
import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUsers, GithubUser } from "../interfaces/github-users.interface";


// Helpers
const mostrarUsuarios = (usuarios:GithubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blanck';


        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li)
    }
}

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


// Streams

//*NOTA: es importante por lo menos saber qué tipo de dato entra
//* y qué tipo de dato recibe subscribe()
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(values => values.target['value']),
    map<string, Observable<GitHubUsers>>(texto => 
        ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll<Observable<GitHubUsers>>(),
    map<GitHubUsers, GithubUser[]>(items => items['items'])
).subscribe( mostrarUsuarios)