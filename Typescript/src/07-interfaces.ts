interface Videojuego{
    titulo: string;
    categoria: string;
    edad: number;
    duracion: number;
    lanzado: boolean;
    mostrar(): void;
    actualizar():string;
}

let gta:Videojuego = {
    titulo: "GTA V",
    categoria: "RPG",
    edad: 18,
    duracion: 120,
    lanzado: true,
    mostrar(){},
    actualizar():string{
        return `Este es el ${gta.titulo}, ${gta.categoria}`;
    }
}

console.log(gta);
console.log(gta.actualizar());

class Tekken implements Videojuego {
    
    constructor(
        public titulo: string, 
        public categoria: string, 
        public edad: number, 
        public duracion: number, 
        public lanzado: boolean,
        public multijugador: boolean
        ){
            this.multijugador = multijugador;
        }

        public mostrar(): void {
            console.log(`Este es el ${this.titulo}, ${this.categoria}`);
        }

        public actualizar():string{
            return `Este es el ${this.titulo}, ${this.categoria}`;
        }

    };

    let tekken:Tekken = new Tekken("Tekken", "RPG", 18, 120, true, false);
    console.log(tekken);