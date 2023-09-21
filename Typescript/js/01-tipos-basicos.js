"use strict";
let apellido = "Pérez";
let numero = 123456789;
let booleano = true;
let nulo = null;
let nodefinido = undefined;
let nolose = undefined;
nolose = 23;
//Esto da error porque se desconoce el tipo, dentro de una condicion si podria
// let multiplicar:number = nolose * 2;
if (typeof nolose === "number") {
    //aquí es válido porque se asegura ser de tipo number
    let multiplicar = nolose * 2;
    console.log(multiplicar);
}
let cualquiercosa = undefined;
//Esto lo permite aunque puede dar error
let multiplicar2 = cualquiercosa * 2;
console.log(multiplicar2); //NaN
//Podemos añadir más de un tipo así
let contacto = "123456789";
contacto = 123456789;
// Cast: forzar datos a un tipo
let numero1 = "123454";
let numero_string = numero1.toString();
let number_number = numero1;
let numero_string2 = numero1;
