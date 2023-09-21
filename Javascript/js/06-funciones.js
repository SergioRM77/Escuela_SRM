function saludo(persona = "Nombre"){
    return `Hola Mundo ${persona}`;
}

var saludito = saludo();

console.log(saludito);
console.log(saludo("pepe"));


// Funciones anonimas
let saludo2 = function(persona = "Nombre"){
    return `Hola Mundo ${persona}`;
}
console.log(saludo2("Juan"));

// Funciones flechas
let saludo3 = nombre => `Hola Mundo ${nombre}`;
let saludo4 = (nombre, pais) => {
    let continente = pais == "España"? "Europa" : "No es Europa";

    return `Hola Mundo ${nombre} y soy continente ${continente}`;
}

console.log(saludo3("Laura"));
console.log(saludo4("Laura", "España"));

let persona = {
    nombre: "Laura",
    direccion: "Calle 123",
    ciudad: "Madrid",
    pais: "España",

    //mejor no usar this para acceder a propiedades de un objeto
    //desde una función
    saludo: function(){
        return `Hola Mundo ${persona.nombre}`;
    },
    saludo2(){
        return `Hola Mundo ${persona.nombre}`;
    },
    saludo3: () => {
        return `Hola Mundo ${persona.nombre}`;
    }
}

console.log(persona.saludo());
console.log(persona.saludo2());
console.log(persona.saludo3());