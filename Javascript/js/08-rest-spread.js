//El `...` es el operador Spread de extensión en JavaScript. Permite expandir un iterable (como
// una matriz) en elementos individuales.
let personas = [ "John", "Carlos", "Juan", "Maria", "Julia"];
// 
console.log(...personas);

function getPersonas(persona1, persona2) {
    console.log(persona1, persona2);
}

//automaticamente sabe que debe coger solo dos parametros
getPersonas(...personas);

//tambien se puede expandir
personas = ["lola", "Rubén", ...personas];

console.log(...personas);

// Rest: representa un numero indefinido de parámetros como un array.
function getPersonasRest(persona1, persona2, ...personasRest) {
    console.log(persona1);
    console.log(persona2);
    console.log(...personasRest);
}

getPersonasRest("Lucas", "lorena", "Manuel", "Juan", "Maria", "Julia");
