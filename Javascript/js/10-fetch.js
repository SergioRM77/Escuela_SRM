//JavaScript puede enviar peticiones de red al servidor y cargar nueva información siempre que se necesite.
// Por ejemplo, podemos utilizar una petición de red para:
// Crear una orden,
// Cargar información de usuario,
// Recibir las últimas actualizaciones desde un servidor,
// …etc.

/** Mirar https://jsonplaceholder.typicode.com/ **/

window.addEventListener('DOMContentLoaded', event => {


let caja = document.querySelector('.contenedor');
caja.innerHTML = 'Cargando información...';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())//Esto devuelve todo el contenido de la página
    .then(data => {
        console.log(data)
        caja.innerHTML = '';
        mostrar(caja, data);
    })//recoger los datos en tipo JSON
    .catch(err =>{console.log("Error en petición AJAX")})//


// DOM
function mostrar(contenedor, elementos){


    elementos.forEach(elemento =>{
        let muestrame = `
        <article>
        <h2>${elemento.title}</h2>
        <p>${elemento.body}</p>
        </article>
        <hr/>
        `;

        contenedor.innerHTML += muestrame;
    });
    return contenedor;
}
})