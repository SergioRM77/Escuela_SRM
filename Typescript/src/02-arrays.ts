let personas: string[] = ["John", "Pepe", "Juan"];

personas.push("Maria");
// personas.push(213); Error

// Tuplas: contrato de tipos y elementos de un número determinado
let perlicula: [string, boolean, number] = ["Batman", true, 1990];

//Esto se puede hacer pero no es recomendable
// perlicula.push("Spiderman");

//Enum: para definir una serie de datos fijos, solo lectura

enum Persona {
    nombre = "Juan",
    dni = 123456789,
    direccion = "Calle 123",
    ciudad = "Medellin"
};

console.log(Persona.nombre, Persona.dni, Persona.direccion, Persona.ciudad);

