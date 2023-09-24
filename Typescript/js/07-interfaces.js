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
class Tekken {
    constructor(titulo, categoria, edad, duracion, lanzado, multijugador) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
        this.multijugador = multijugador;
        this.multijugador = multijugador;
    }
    mostrar() {
        console.log(`Este es el ${this.titulo}, ${this.categoria}`);
    }
    actualizar() {
        return `Este es el ${this.titulo}, ${this.categoria}`;
    }
}
;
let tekken = new Tekken("Tekken", "RPG", 18, 120, true, false);
console.log(tekken);
