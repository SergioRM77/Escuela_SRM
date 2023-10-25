import { filter, from, fromEvent, map, range, tap } from "rxjs";

range(1,10)
    .pipe(
        // filter: filtra y deja pasar solo si cumple la condición
        filter((value, index) => {
            console.log("index (opcional): ", index);
            return value % 2 === 1;
        })
).subscribe(console.log)


const personajes = [
    {
        name: "batman",
        tipo: "superheroe"
    },
    {
        name: "robin",
        tipo: "superheroe"
    },
    {
        name: "joker",
        tipo: "villano"
    }
];

from(personajes).pipe(
    filter(p => p.tipo !== "superheroe")
).subscribe(console.log)


//* ENCADENAR OPERADORES
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    //map para trabajar con un conjunto de datos
    map(event => event.code),//recibe un keyboardEvent, devueeve string
    //filter para obtener solo los valores deseados, en este caso solo Enter
    filter(key => key === 'Enter'),
    // podemos encadenar más operaciones
    tap(key => console.log("Has presionado:")),
    // filter(key => key === 'Enter'),
)

keyup$.subscribe(console.log)