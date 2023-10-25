import { asyncScheduler } from "rxjs";

/**
 * El programador async programa tareas de forma asíncrona,
 *  colocándolas en la cola de bucle de eventos JavaScript. 
 *  Se utiliza mejor para retrasar tareas en el tiempo o 
 *  para programar tareas que se repiten en intervalos.
 */

// Estas dos funciones hacen prácticamente lo mismo
// setInterval(() => {},3000);
// setTimeout(() => {},3000);

const saludar = () => console.log("Hola mundo");

// saludar() con los () ejecuta la función en el instante, 
// sin paréntesis solo se nombra, delega la ejecución a asynScheduler
asyncScheduler.schedule(saludar, 2000);


// Para pasar parámetros tenemos que enviarlo al 3er parámetro de schedule
// schedule(funcionARetrasar, tiempo, parametro/{a:param1, b:param2})
const saludar2 = nombre => console.log(`Hola ${nombre}`);
asyncScheduler.schedule(saludar2, 2000, 'Sergio');


const saludar3 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);
asyncScheduler.schedule(saludar3, 2000, {nombre:'Sergio', apellido:'Romero'});

/**
 * Podemos hacer que sea como un setInterval o setTimeout,
 * que se ejecute periódicamente, para ello dentro de la 
 * función schedule llamamos a una function(){} !!no una funcion flecha!!
 * hacemos las operaciones y será parecido a lo anterior pero
 * para que se ejecute periódicamente debemos llamar internamente
 * a schedule con el valor y el tiempo de ejecución
 */

const subs = asyncScheduler.schedule(function(state:number){
    console.log("State vale: ", state);

    this.schedule((state + 1), 1000)
}, 3000, 0);

// Para finalizar y que deje de ejecutarse totalmente debemos dejar
// de estar subscritos a esta tarea, por eso es bueno siempre 
// asignar nombre a las subscripciones, para más adelante usar .unsubscribe()

/* Esto es lo más facil de entender
setTimeout(() => {
    subs.unsubscribe(); // esto destruye totalmente la tarea, no se ejecuta en segundo plano
}, 6000);
*/

//Esto hace lo mismo que lo anterior pero en una línea, las 2 cosas están bien
asyncScheduler.schedule(()=> subs.unsubscribe(), 6000)