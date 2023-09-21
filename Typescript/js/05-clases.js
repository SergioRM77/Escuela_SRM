"use strict";
class Coche {
    ;
    constructor(modelo, marca, year, color, arrancado = false) {
        this.modelo = modelo;
        this.marca = marca;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
    }
    arrancar() {
        this.arrancado = true;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrar() {
        console.log("Hola soy un coche");
    }
    set nuevoColor(color) {
        this.color = color;
    }
    get nuevoColor() {
        return this.color;
    }
    static saludar() {
        console.log("Info de la class");
    }
}
class Camioneta extends Coche {
    constructor(modelo, marca, year, color) {
        super(modelo, marca, year, color);
    }
    static saludar2() {
        console.log("hola soy una camioneta");
    }
    mostrar() {
        console.log("Hola soy una camioneta " + this.marca);
    }
}
let camioneta = new Camioneta("renegade", "jeep", 2020, "rojo");
let coche = new Coche("A3", "audi", 2020, "verde");
Camioneta.saludar();
coche.mostrar();
camioneta.mostrar();
// let micoche: Coche = new Coche();
// micoche.marca = "marca";
// console.log(micoche.marca);
