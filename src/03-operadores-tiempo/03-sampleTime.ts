/**
 * sampleTime(): retorna el último valor emitido según el tiempo especificado,
 *  si no se emite ningún valor, no hace nada
 */

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    // ponerlo aquí arriba retrasa el map, no sobrecarga
    sampleTime(2000),
    map(({x, y}) => ({x, y})),

).subscribe(console.log);