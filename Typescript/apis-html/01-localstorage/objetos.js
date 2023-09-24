let objeto = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20
}

//para poder ver un objeto se deba pasar a jsonstring

let jsonString = JSON.stringify(objeto);

localStorage.setItem("objeto", jsonString);

//pasar de jsonstring a objeto
let persona = JSON.parse(localStorage.getItem("objeto"));