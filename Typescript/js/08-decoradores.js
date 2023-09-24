"use strict";
//***** Ampliar para entender mejor ****** */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Los decoradores en TypeScript son una forma de 
// alterar dinámicamente la funcionalidad o añadir nuevas 
// responsabilidades a un objeto a nivel de clase, propiedad, 
// método o parámetro sin por ello tener que emplear otros 
// mecanismos como la herencia
function proyectar(constructor) {
    constructor.prototype.hacerProyeccion = function (activar) {
        activar ? console.log("Proyectando pelicula...", this.titulo) : console.log("Cine cerrado...");
    };
}
let Pelicula = class Pelicula {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
};
Pelicula = __decorate([
    proyectar,
    __metadata("design:paramtypes", [String, String])
], Pelicula);
let batman = new Pelicula("Batman", "Accion");
batman.hacerProyeccion(true);
