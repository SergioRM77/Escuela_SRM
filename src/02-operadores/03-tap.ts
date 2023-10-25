/**
 * tap(): la principal función es disparar efectos secundarios en
 *  un proceso, como imprimir en consola resultados obtenidos o 
 *  disparar una acción cuando la información pasa por ese observable,
 *  no devuelve nada en la operación, pero deja pasar el valor que
 *  ha recibido como clave
 */

import { map, range, tap } from "rxjs";

const numeros$ = range(1,5);

numeros$.pipe(
    tap(x => {
        console.log('antes', x)
        // este return no hace nada
        return x+1000;
    }),
    // map recibe el original
    map(x => x * 10),
    tap(x => console.log("después", x)),
    // este tap crea un Partial Observer, es igual que un observer
    // pero con menos funcionalidades, sin embargo el complete se 
    // ejecuta después de terminar todo incluso después del subscribe
    tap({
        next: valor => console.log("final", valor),
        complete: () => console.log("Se terminó la operación")
    })
).subscribe(val => console.log("subs", val))