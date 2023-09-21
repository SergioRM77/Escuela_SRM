class Coche{


    ;

    constructor(
        public modelo: string, 
        public marca: string, 
        protected year: number,
        public color: string,
        private arrancado:boolean = false
        ){

        

    }

    public arrancar(): void{
        this.arrancado = true;
    }

    public apagar(): void{
        this.arrancado = false;
    }

    public mostrar(): void{
        console.log("Hola soy un coche");
    }

    public set nuevoColor(color:string){
        this.color = color;
    }

    public get nuevoColor(): string{
        return this.color;
    }

    static saludar(): void{
        console.log("Info de la class");
    }
}

class Camioneta extends Coche{

    constructor(
        modelo: string, 
        marca: string, 
        year: number,
        color: string
        ){
        super(modelo, marca, year, color);
    }

    static saludar2(): void{
        console.log("hola soy una camioneta");
    }
    public mostrar(): void{
        console.log("Hola soy una camioneta " + this.marca);
    }

}
let camioneta: Camioneta = new Camioneta("renegade", "jeep", 2020, "rojo");
let coche: Coche = new Coche("A3", "audi", 2020, "verde");
Camioneta.saludar();

coche.mostrar();
camioneta.mostrar();

// let micoche: Coche = new Coche();
// micoche.marca = "marca";
// console.log(micoche.marca);