/**
 * mergeMap(): Retorna un Observable que, después de aplicar 
 *  una función a cada elemento emitido por el Observable fuente, 
 *  donde dicha función retorna un Observable, fusiona los 
 *  Observables internos resultantes y emite el resultado de la fusión.
 */

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// })


// *Contador de tiempo pulsando ratón
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log)