/**
 * distinctUntilKeyChanged('nombre-key'): deja pasar el valor que no sea igual al anterior por nombre de la key,
 *  pero si puede haber repetidos
 */
import { distinctUntilKeyChanged, from, } from "rxjs"
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
    distinctUntilKeyChanged('nombre')//emisiones por campo
).subscribe(console.log)