/**
 *? switchMap(): parecido a mergeMap pero solo se subscribe a un observable
 *? si se emite un nuevo valor, 'aplasta' el observable anterior y el nuevo
 *? es el que vale, es decir solo puede haber un observable
 * mergeAll(): Convierte un Observable de orden superior en uno
 *  de primer orden que emite las emisiones de los Observables 
 *  internos de forma concurrente. Pede haber varios observables
 *! mergeAll y mergeMap puede hacer muchas peticiones simultáneas, puede no
 *! ser eficiente y quedar bloqueado por una api, por ejemplo
 */
 import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, switchMap } from "rxjs";
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
     mergeMap<string, Observable<GitHubUsers>>(texto => 
         ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
     ),
     map<GitHubUsers, GithubUser[]>(items => items['items'])
 )//.subscribe( mostrarUsuarios)
 
 const url = 'https://httpbin.org/delay/1?arg=';
 
 input$.pipe(
     map(values => values.target['value']),
 
     // !mergeMap hace una petición por cada tecla pulsada, no es eficiente
     
     // ?cuando empieza a escribir conecta pero cada nueva pulsación 
     // ? cancela la petición anterior
     switchMap(texto => ajax.getJSON(url + texto))
 ).subscribe(console.log)