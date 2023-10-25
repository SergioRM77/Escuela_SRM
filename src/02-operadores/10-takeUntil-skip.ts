/**
 * takeUntil(): Emite los valores emitidos por el Observable
 *  fuente hasta que un segundo Observable emita un valor
 * skip(): Retorna un Observable que se salta las primeras x 
 *  emisiones del Observable fuente
 */

import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    // no se ejecuta en el primer click
    skip(1),
    tap(() => console.log('tap desupés de skip')),
);

counter$.pipe(
    // emite los valores hasta hacer click en el botón
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})
