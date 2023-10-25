/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, map, of } from "rxjs";

const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

from(nombres).pipe(
    map(name => capitalizar(name))
).subscribe(console.log)

of(...nombres).pipe(
    map(name => capitalizar(name))
).subscribe(console.log)
