"use strict";
let gta = {
    titulo: "GTA V",
    categoria: "RPG",
    edad: 18,
    duracion: 120,
    lanzado: true,
    mostrar() { },
    actualizar() {
        return `Este es el ${gta.titulo}, ${gta.categoria}`;
    }
};
console.log(gta);
console.log(gta.actualizar());
