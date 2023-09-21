//Condicionales

let persona = ["Joseph", 25];

if (persona[0] === "Joseph") {
    console.log("Hola Joseph");
} else {
    console.log("No es Joseph");
}

console.log(persona[0] == "Jose" ? "Es Joseph" : "No es Joseph");
console.log(persona[1] == "25" ? 
    "Es igual en valor" : "No es igual en valor");//true
console.log(persona[1] === "25" ? 
    "Es igual en valor y tipo" : "No es igual en valor y tipo");//false

console.log(25 != "25" ? "Desigual" : "Es igual");//false
console.log(25 !== "25" ? "Desigual" : "Es igual");//true

// Bucles

let nombres = ["Jose", "Juan", "Jose", "Maria", "Mar", "Ana"];

//for clasico

for (let i = 0; i < nombres.length; i++) {
    // console.log(nombres[i]);
}

//for in: accede al indice

for (let indice in nombres) {
    // console.log(indice);//0,1,2,3,4
}

//for of: accede al contenido

for (let nombre of nombres) {
    // console.log(nombre);//Jose,Juan,Maria,Mar,Ana
}

//while

let contador = 0;

while (contador < 10) {
    // console.log(contador);
    contador++;
}

//do while

let contador2 = 0;

do {
    // console.log(contador2);
    contador2++;
} while (contador2 < 10);

//forEach
// nombres.forEach((nombre, indice) => { console.log(indice, nombre) });
//0 Jose,1 Juan,...,5 Ana

// Iterator
const nombresIterator = nombres[Symbol.iterator]();
// console.log(typeof nombresIterator, nombresIterator);//object, array iterator

//mostramos el objeto iterator con el puntero actualmente
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());
// console.log(nombresIterator.next());//done: true porque no hay mas elementos

const fruta = ["Banana", "Pera", "Melon", "Platano", "Piña"];

fruta[Symbol.iterator] = function () {
    let indice = 0;
    let valores = Object.values(this);
    return {
        next: () => {
            let valor = valores[indice];
            
            if (indice >= valores.length) {
                return {done: true, value: undefined};
            }

            indice++;
            return {done: false, value: valor};
            
        }
    }
}

// for (let propiedad of fruta) {
//     console.log(propiedad);
// }