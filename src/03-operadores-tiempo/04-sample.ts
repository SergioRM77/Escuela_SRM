/**
 * sample(): muestra el estado del observable en el momento indicado
 *  cuando se activa el evento, casi como si se ejecutase en segundo plano
 */
import { fromEvent, interval, sample } from "rxjs"

const interval$ = interval(500)

const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log)