/**
 * first(): si va sin argumentos te toma solo el primer valor
 *      o se ejecuta una única vez, pero si se le pasa un argumento
 *      hace una operación booleana, si se cumple deja de seguir.
 */

import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    // first() hace lo mismo que take(1)
    // first(),
    // first<MouseEvent>(event => event.clientY >= 150)
    
    
    //*más detallado
    // map(event => ({
        //     clientY: event.clientY,
        //     clientX: event.clientX
        // }) ),
    //*más facil de leer
    map(({clientX, clientY}) => ({clientY,clientX}) ),
    first(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})