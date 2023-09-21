let apellido: string = "Pérez";
let numero: number = 123456789;
let booleano: boolean = true;

let nulo: null = null;
let nodefinido: undefined = undefined;

let nolose: unknown = undefined;
nolose = 23;

//Esto da error porque se desconoce el tipo, dentro de una condicion si podria
// let multiplicar:number = nolose * 2;

if (typeof nolose === "number") {
    //aquí es válido porque se asegura ser de tipo number
    let multiplicar: number = nolose * 2;
    console.log(multiplicar);
}


let cualquiercosa: any = undefined;

//Esto lo permite aunque puede dar error
let multiplicar2: number = cualquiercosa * 2;
console.log(multiplicar2);//NaN

//Podemos añadir más de un tipo así
let contacto: string | number = "123456789";
contacto = 123456789;

// Cast: forzar datos a un tipo
let numero1: any = "123454"
let numero_string: string = numero1.toString();
let number_number: number = <number>numero1;
let numero_string2: string = <string>numero1;