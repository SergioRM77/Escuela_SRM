/**
 * takeWhile(): toma los valores que cumplan la condición
 *      ejemplo, si x < 4, continúa, por defecto no está 
 *      incluido el valor que rompe, está en false pero
 *      podemos ponerlo en true y nos da ese valor también
 */

import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    // por defecto include es false
    // takeWhile(({y}) => y <= 150)
    // aquí include es true
    takeWhile(({y}) => y <= 150, true)

).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})
