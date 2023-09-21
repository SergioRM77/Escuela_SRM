// Seleccionar elemetnos por id

// Estilo clásico
// let contenedor = document.getElementById("contenedor")

// Estilo moderno
// let contenedor = document.querySelector("#contenedor h1")

// Podemos elegir el elemento dentro del selector
let contenedor = document.querySelector("#contenedor h1")

/** Para varios selectores a la vez y podemos iterarlos 
 * con foreach por ejemplo
 * let contenedor = document.querySelectorAll("#contenedor h1")
**/
console.log(contenedor)



contenedor.style.backgroundColor = "#ccc"
contenedor.style.color = "white"
contenedor.style.border = "1px solid black"
contenedor.innerHTML = "Esto es un texto desde js"