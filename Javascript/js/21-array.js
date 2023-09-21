let personas = ["Juan", "Pedro", "Maria", "Mar", "Laura"];

//devuelve primera coincidencia
let busqueda = personas.find( persona => {
    return persona === "Maria";
})
console.log(busqueda);//María

//devuelve primera coincidencia
let busqueda2 = personas.findIndex( persona => {
    return persona === "Maria";
})

console.log(busqueda2);// 2

// Crear array con un objeto iterable
let array_letras = Array.from("Hola a todos");
console.log(array_letras);

let array_num = Array.from([1, 2, 3, 4, 5]);

//hacer operaciones dentro del array previamente
let array_num_cuadrados = Array.from([1, 2, 3, 4, 5], 
    numero => Math.pow(numero, 2));

console.log(array_num);
console.log(array_num_cuadrados);//[1, 4, 9, 16, 25]

console.log(array_num_cuadrados.includes(10));//false
let nums_filtrados = array_num_cuadrados.filter(numero => numero % 2 === 0);

console.log(nums_filtrados);//[4, 16]

let paises = [
    {
        nombre: "España",
        continente: "Europa"
    },
    {
        nombre: "Francia",
        continente: "Europa"
    },
    {
        nombre: "Portugal",
        continente: "Europa"
    },
]
// Some: alguna coincidencia
let exitePais = paises.some(pais => pais.nombre === "Portugal");

//Every: en todos son el mismo
let esContienteIguales = paises.every(pais => pais.continente === "Europa");

console.log(exitePais);//true

console.log(esContienteIguales);//true

let contador = 0;
let paisesConId = paises.map((pais, contador) =>{
    return {
        nombre: pais.nombre,
        continente: pais.continente,
        id: contador++
    }
});

console.log(paisesConId);
//[ { nombre: 'España', continente: 'Europa', id: 0 }, 
//{ nombre: 'Francia', continente: 'Europa', id: 1 }, 
//{ nombre: 'Portugal', continente: 'Europa', id: 2 } ]

//Reduce: reduce el array a un elemento, *cuidado con strings y numeros
let numReduce = array_num_cuadrados.reduce((acumulador, numero) => 
acumulador + numero, 0);
console.log(numReduce);// suma de [1, 4, 9, 16, 25] resultado es 55