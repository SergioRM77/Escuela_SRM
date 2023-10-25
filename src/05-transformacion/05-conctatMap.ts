/**
 * concatMap(): concatena varias subscripciones simultáneas
 *  pero las nuevas no se ejecutan hasta que finalizan las
 *  inmediatamente anteriores a ese, las pone en cola
 */

import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// si clicko 3 veces, emitirá todas las pulsaciones por orden
click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log)