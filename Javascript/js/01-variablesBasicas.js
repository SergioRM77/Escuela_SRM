// var: disponible en todo el documento, acceso desde cualquier sitio
var num = 12;
var nombre = "Pepe";

// let: solo accesible desde el bloque que lo contiene
let apellido = "Ramírez";

if (apellido == "Ramírez") {
  apellido = "Ruiz";

  //este solo accesible dentro de if
  let apellido2 = "Martín";
  console.log(nombre, apellido, apellido2);
}
//Esto dará error, en el bloque general no existe
// console.log(apellido2);

// const: son variables inmutables, no se pueden modificar
const num2 = 11;
// num2 = 12;Esto dará error, no se puede modificar
console.log(num2);

let cadena = nombre + " " + apellido + " " + num2;

//Interpolacion de cadenas
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let nombreCompleto2 = `Hola ${nombre}`;
console.log(nombreCompleto2);

let htmlInfo = `
    <h1>Hola ${nombre}</h1>
    <h2>Bienvenido al curso de JavaScript</h2>`;

//Creamos un elemento HTML
let cajaFicha = document.createElement("secction");
//añadimos contenido de tipo HTML al elemento HTML creado
cajaFicha.innerHTML = htmlInfo;

//Es necesario para esperar al evento "cargar contenido"
document.addEventListener(
  "DOMContentLoaded",
  () => {
    //añadimos el elemento creado al body
    document.body.appendChild(cajaFicha);
  },
  false
); //para no añadir funciones extra

function crearElemento(nombre) {
  let cajaFicha = document.createElement("secction");

  let bloque = `
    <h2>Hola ${nombre}</h2>
    <p>Esto es texto adicional</p>`;

  cajaFicha.innerHTML = bloque;
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      document.body.appendChild(cajaFicha);
    },
    false
  );
}

crearElemento("Manolo");
