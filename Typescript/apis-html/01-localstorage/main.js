//LocalStorage, comprobar si el navegador es compatible
console.log(typeof(Storage));
if (typeof(Storage) !== "undefined") {
    console.log("El navegador soporta LocalStorage");
} else {
    console.log("El navegador no soporta LocalStorage");
}

//Guardar datos en LocalStorage del navegador
localStorage.setItem("nombre", "Pepe");
localStorage.setItem("nombre1", "Juan");

//Escribir en el navegador los datos guardados en LocalStorage
let datos = document.querySelector("#datos");
datos.innerHTML = localStorage.getItem("nombre");

// document.write(localStorage.getItem("nombre")); sin defer


// Borrar datos de LocalStorage del navegador
// localStorage.removeItem("nombre")

document.querySelector("#borrar").addEventListener("click", () => {
    localStorage.removeItem("nombre");
    document.querySelector("#datos").remove();//borrar del navegador
})

document.querySelector("#all").addEventListener("click", () => {
    localStorage.clear();
})