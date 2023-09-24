//LocalStorage, comprobar si el navegador es compatible
console.log(typeof(Storage));
if (typeof(Storage) !== "undefined") {
    console.log("El navegador soporta SessionStorage");
} else {
    console.log("El navegador no soporta SessionStorage");
}

//Guardar datos en Session del navegador
sessionStorage.setItem("nombre", "Pepe");
sessionStorage.setItem("nombre1", "Juan");

//Es todo igual que localStorage