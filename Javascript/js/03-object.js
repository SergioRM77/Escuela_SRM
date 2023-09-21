// json: javascript object notation

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    sexo: "M",
    altura: 1.80,
    peso: 80,
    mostrar: function() {
        return this.nombre + " - " + this.apellido + " - " + this.edad;
    },
    mostrarFlecha: () => {
        return persona.nombre + " - " + persona.apellido + " - " + persona.edad;
    },

}
//esto es un objeto
console.log(typeof(persona));

console.log(persona);
console.log(persona.nombre);
console.log(persona.mostrar());
console.log(persona.mostrarFlecha());

persona.nombre = "Pedro";
persona["apellido"] = "García";
delete persona.edad;
console.log(persona.mostrar()); //Pedro - García - undefined

//comprobar si existe un atributo en un objeto
console.log("pais" in persona);//false

for(let propiedad in persona) {
    let dato = persona[propiedad];
    if(dato != null && typeof(dato) != "function") {
        console.log(propiedad + " = " + persona[propiedad]);
    }
}

//para evitar un error al no existir un atributo en un objeto
// console.log(persona.nacionalidad.ciudad);Esto es un error
console.log(persona.nacionalidad?.ciudad);//undefined