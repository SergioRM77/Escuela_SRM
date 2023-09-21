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