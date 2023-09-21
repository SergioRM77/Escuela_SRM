"use strict";
function saludo() {
    console.log("Hola");
}
function saludo2(nombre, annio = 18, paramPuedeSerIndefinido) {
    return "Hola " + nombre + ". Tienes " + annio + " años";
}
function finApp() {
    throw new Error("Fin del programa");
}
// Tipo Funciones
// let grupos: (datos:string[]) => string;
let grupos = function (datos) {
    return "Grupos: " + datos.toString();
};
console.log(grupos(["a", "b", "c"]));
// Tipo Literal
function elegir(nombre, num) {
    return `${nombre} elegió ${num}, está dentro del rango`;
}
