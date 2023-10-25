import { asyncScheduler, of, range, scheduled } from "rxjs";



//of está diseñado para trabajar de manera síncrona
// const src$ = of(1,2,3,4,5);

//* rango tambien es síncrono, acepta un valor de inicio y un contador para sumar
//* pero también podemos hacerla asíncrona con asyncScheduler como 3er parámetro
const src$ = range(1,5);//1,2,3,4,5
const src2$ = range(-5,2);//-5,-4
const src3$ = range(5);//0,1,2,3,4

//*de esta manera al ser asíncrono ejecuta primero lo demás: inicio/fin/1,2,3,4,5
//! deprecated
const src4$ = range(1,5, asyncScheduler)

console.log("inicio")
// src4$.subscribe(console.log)
console.log("fin")

//? Lo actual
scheduled(src3$, asyncScheduler).subscribe(console.log);