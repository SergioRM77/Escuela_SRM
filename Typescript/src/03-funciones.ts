function saludo(): void{
    console.log("Hola");
}

function saludo2(nombre: string, annio: number = 18, 
    paramPuedeSerIndefinido?: string): string{
    return "Hola " + nombre + ". Tienes " + annio + " años";
}

function finApp(): never{
    throw new Error("Fin del programa");
}

// Tipo Funciones

// let grupos: (datos:string[]) => string;

let grupos = function(datos:string[]){
    return "Grupos: " + datos.toString();
}

console.log(grupos(["a", "b", "c"]));

// Tipo Literal

function elegir(nombre: string, num: 1|2|3|4): string{
    return`${nombre} elegió ${num}, está dentro del rango`
}