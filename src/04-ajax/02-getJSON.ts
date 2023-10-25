import { AjaxError, ajax } from "rxjs/ajax";
import { Subject, catchError, of } from 'rxjs';

const url = 'https://httpbin.org/delayxx/1';

const manejaError = (resp: AjaxError) => {
    console.log('error:', resp.message);
    return of({
        ok: false, usuarios: []
    })
}

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'mi-token': 'abc123'
// }).pipe(
//     catchError(manejaError)
// );

// // esto funciona también pero no está procesada
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$.subscribe(data => console.log(data))
// obs2$.subscribe(data => console.log(data))


obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.log('error en subs:', err),
    complete: () => console.log('complete')
})