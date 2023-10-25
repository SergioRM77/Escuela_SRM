/**
 * debounceTime(): retrasa la ejecución una vez es llamado y ejecuta
 */
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent(document, 'click');
/**
 *  este ejemplo retrasa la info 3 segundos
 *  cuando haces click se reinicia el contador
 *  si siempre se está pulsando nunca termina
 * es bueno para evitar sobrecarga de página
 */
click$.pipe(
    debounceTime(3000)
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
    debounceTime(1000),
    map(({target}) => target['value']),
    distinctUntilChanged()
).subscribe(console.log)