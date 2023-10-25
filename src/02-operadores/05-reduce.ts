/**
 * reduce(): coge unos valores y los reduce a un único valor, ya sea 
 * sumar, restar, calcular porcentaje..., el valor del final es el de inicio
 *      reduce((valorAcumulador, valorActual) => valorAcumulador + valorActual, 0)
 */

import { interval, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);//si en vez de 0, es 5: resultado final 20
// console.log('total array', total)// 15

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer,0)
).subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("Complete")
}
)