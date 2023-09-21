// Symbol es un objeto incorporado cuyo constructor devuelve 
//   un symbol primitivo — también llamado Symbol value o simplemente
//   Symbol — que está garantizado que sea único. Los Symbols se utilizan
//   a menudo para añadir claves de propiedades únicas a un objeto 
//   que no sean iguales a las claves que cualquier otro código pueda 
//   añadir al objeto, y que están ocultas de cualquier mecanismo que 
//   otro código utilice normalmente para acceder al objeto.

let animal = Symbol("tigre");
let animal2 = Symbol("tigre");
console.log(animal, animal2);
console.log(animal == animal2);//false
console.log(animal === animal2);//false

let persona = {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25
}

let id = Symbol("id");
persona[id] = 2;
persona[id] = 3;

console.log(persona.id, persona[id]);
