//***** Ampliar para entender mejor ****** */

// Los decoradores en TypeScript son una forma de 
// alterar dinámicamente la funcionalidad o añadir nuevas 
// responsabilidades a un objeto a nivel de clase, propiedad, 
// método o parámetro sin por ello tener que emplear otros 
// mecanismos como la herencia
function proyectar(constructor:Function):any{
    constructor.prototype.hacerProyeccion = function(activar:boolean):void{
        activar ? console.log("Proyectando pelicula...", this.titulo) :console.log("Cine cerrado...") ;
    }
    
}

@proyectar
class Pelicula{
    constructor(
        public titulo: string,
        public genero: string
    ){}

}

let batman: Pelicula = new Pelicula("Batman", "Accion");

(<any>batman).hacerProyeccion(true);