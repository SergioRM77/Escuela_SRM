let frutas = ["Banana", "Mango", "Uva", "Pera", "Pomelo"];

let [banana, mango, uva, pomelo] = frutas;

// console.log(banana);
// console.log(mango);
// console.log(pomelo);//pera -> no está por orden

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    altura: 1.80,
    peso: 80
};

//al tener un objeto clave, automaticamente la encuetra
// let {nombre, apellido, edad, peso} = persona;
// console.log(nombre)
// console.log(apellido);
// console.log(peso);

let usuario = "Dani Parra 8888552211Ñ 20/10/2000 Málaga";

let [nombre, apellido, dni, fecha, ciudad] = usuario.split(" ");