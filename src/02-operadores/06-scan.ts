/**
 * scan(): es igual que reduce pero en vez de esperar hasta recorrer toda
 *      la colección, devuelve un valor cada vez que realiza una operación
 */

import { from, map, reduce, scan } from "rxjs";

const numeros = [1,2,3,4,5];

const  totalAcumulador = (acc, cur) => acc + cur;

// Reduce: muestra el resultado final
from(numeros).pipe(
    reduce(totalAcumulador  , 0)
).subscribe(console.log)

// Scan: muestra todas las operaciones
from(numeros).pipe(
    scan(totalAcumulador  , 0)
).subscribe(console.log)

// Redux
interface Usuario{
    id?: string;
    autenticado: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    { id:'fer', autenticado: false, token: null,edad: 0},
    { id:'jus', autenticado: true, token: 'ABC', edad: 0},
    { id:'der', autenticado: true, token: 'ABC123', edad: 0},
];

const state$ = from(user).pipe(
    
    scan((acc, cur) => {
        return {...acc, ...cur, edad: 33 }
    }, {})
);

const id$ = state$.pipe(
    map(state=> {
        const user = state as Usuario
        return user;
    })
)

id$.subscribe(console.log)