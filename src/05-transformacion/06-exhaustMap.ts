/**
 * exhaustMap(): ejecuta y emite los valores pero mientras se ejecuta
 *  anula toda nueva emisión, no se guarda en cola, solo se ejecuta
 *  otra vez si ha finalizado la que estaba en ejecución 
 */

import { concatMap, exhaustMap, fromEvent, interval, switchMap, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log)