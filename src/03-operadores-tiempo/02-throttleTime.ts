/**
 * throttleTime(): ejecuta y luego retrasa la ejecución una vez es llamado
 */
import { throttleTime, distinctUntilChanged, fromEvent, map, tap, asyncScheduler } from "rxjs";

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
)
// .subscribe(console.log)


/**
 * Ejemplo 2, a traves de un input hacemos consulta,
 *  retrasamos la búsqueda hasta que deje de escribir,
 *  luego imprime qué quiere buscar pero con 
 *  distinctUntilChanged() evitamos que busque exactamente
 *  lo mismo que antes.
 */
const input = document.createElement('input');
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // throttleTime(1000),
    
    // emitir valores cada segundo
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    map(({target}) => target['value']),
    distinctUntilChanged()
).subscribe(console.log)