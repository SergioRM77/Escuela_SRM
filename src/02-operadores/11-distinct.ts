/**
 * distinct(): deja pasar todos los valores que no estén repetidos,
 *  usa el triple operador de igualdad === osea que 1 y '1' son diferentes
 */
import { distinct, from, of } from "rxjs"

const numeros$ = of(1,1,2,2,3,2,'1',2,4,5,6,55,4,1);
numeros$.pipe(
    distinct() // esto es ===
).subscribe(console.log)

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Lucas'
    },
    {
        nombre: 'Pepe'
    },
    {
        nombre: 'Lucas'
    },
    {
        nombre: 'Maria'
    },
    {
        nombre: 'Maria'
    },
    {
        nombre: 'Juan'
    },
    {
        nombre: 'Luis'
    },
    {
        nombre: 'Maria'
    },
    {
        nombre: 'Ana'
    },
    {
        nombre: 'Pepe'
    },
];


from(personajes).pipe(
    distinct(p => p.nombre)//emisiones por campo
).subscribe(console.log)