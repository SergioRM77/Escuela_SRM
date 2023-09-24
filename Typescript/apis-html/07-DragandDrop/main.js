const tomates = document.querySelectorAll('.tomate');
const huerto = document.querySelector('#huerto');
const cesta = document.querySelector('#cesta');

tomates.forEach((tomate, indice) => {
    // asignar un id a cada tomate para moverlo individualmente
    tomate.setAttribute('id', "tomate" + (indice + 1));

    //Dragstart se accinoa al pinchar
    // Drag se accina mientras tienes pinchado
    // Dragend se accina cuando sueltas
    tomate.addEventListener('dragstart', (e) => {
        // console.log('moviendo el tomate ' + parseInt(indice + 1));

        //*** Compartir info del elemento
        console.log(e.target);
        e.dataTransfer.setData('text', e.target.id);
    })
    
});

// Dragenter se activa al entrar en la zona
huerto.addEventListener('dragenter', (e) => {
    e.preventDefault();//para evitar el comportamiento por defecto
    console.log("Entra dentro de la zona");
});


// Dragover se activa al pasar por la zona
huerto.addEventListener('dragover', (e) => {
    e.preventDefault();//para evitar el comportamiento por defecto
    // console.log("Tomate moviendose");
});

// Drop se activa al soltar en la zona
huerto.addEventListener('drop', (e) => {
    e.preventDefault();//para evitar el comportamiento por defecto
    console.log("Tomate soltado");

    //*** Recibir info del elemento y soltarlo en la zona
    let tomate = e.dataTransfer.getData("text");

    e.target.appendChild(document.querySelector("#" + tomate));
    console.log( "Has plnatado el tomate " + tomate);

});
/** Dragover y Drop tienen que ir juntos o no funciona */

// Dragleave se activa cuando sale de la zona
// huerto.addEventListener('dragleave', (e) => {
//     e.preventDefault();//para evitar el comportamiento por defecto
//     console.log("Tomate sale de la zona");
// });

// Para mover elementos de html, usamos el atributo draggable="true"



/** Volver a meter elementos en su sitio de origen */

cesta.addEventListener('dragover', (e) => {
    e.preventDefault();//para evitar el comportamiento por defecto
});


cesta.addEventListener('drop', (e) => {
    e.preventDefault();//para evitar el comportamiento por defecto

    let tomate = e.dataTransfer.getData("text");

    e.target.appendChild(document.querySelector("#" + tomate));
    console.log( "Has recogido el " + tomate);

});