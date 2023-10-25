/**
 * distinctUntilChanged(): deja pasar el valor que no sea igual al anterior,
 *  pero si puede haber repetidos
 */
import { distinct, distinctUntilChanged, from, of } from "rxjs"

const numeros$ = of(1,'1',1,2,2,3,2,'1',2,4,5,6,55,4,1);
numeros$.pipe(
    distinctUntilChanged() // esto es ===
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
    distinctUntilChanged((ant, act)=> ant.nombre === act.nombre)//emisiones por campo
).subscribe(console.log)