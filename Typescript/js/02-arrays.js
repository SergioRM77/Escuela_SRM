"use strict";
let personas = ["John", "Pepe", "Juan"];
personas.push("Maria");
// personas.push(213); Error
// Tuplas: contrato de tipos y elementos de un número determinado
let perlicula = ["Batman", true, 1990];
//Esto se puede hacer pero no es recomendable
// perlicula.push("Spiderman");
//Enum: para definir una serie de datos fijos, solo lectura
var Persona;
(function (Persona) {
    Persona["nombre"] = "Juan";
    Persona[Persona["dni"] = 123456789] = "dni";
    Persona["direccion"] = "Calle 123";
    Persona["ciudad"] = "Medellin";
})(Persona || (Persona = {}));
;
console.log(Persona.nombre, Persona.dni, Persona.direccion, Persona.ciudad);
