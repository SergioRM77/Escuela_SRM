/** Mirar https://jsonplaceholder.typicode.com/ **/

//FETCH con post para guardar un dato en una url


//No se puede enviar directamente, hay que pasarlo a 
//'json string' para poder viajar en cabeceras http, 
//por eso se usa JSON.stringify
let nuevo_post = JSON.stringify({
    title: "Nuevo Post título",
    body: "Nuevo Post contenido",
    userId: 55
})
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: nuevo_post,
    //por último cabecera para indicar el tipo de dato que se quiere enviar
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
// para recoger respuesta de la petición
.then(respuesta => respuesta.json())
// para recoger los datos tratados a json
.then(datos => console.log(datos))