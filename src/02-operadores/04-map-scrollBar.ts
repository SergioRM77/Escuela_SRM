//*Crear una barra de progreso en la página

import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Adipiscing vitae proin sagittis nisl rhoncus mattis. Semper viverra nam libero justo laoreet sit amet. Elementum nibh tellus molestie nunc non. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Tempor orci dapibus ultrices in iaculis nunc sed augue. Ut aliquam purus sit amet luctus venenatis. Dui vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed vulputate odio. Lectus magna fringilla urna porttitor rhoncus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Nunc sed augue lacus viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Habitant morbi tristique senectus et netus et malesuada fames ac.
<br/><br/>
Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Posuere ac ut consequat semper viverra nam libero justo laoreet. Feugiat nibh sed pulvinar proin gravida. Pellentesque id nibh tortor id. Eu feugiat pretium nibh ipsum consequat. Et tortor consequat id porta nibh venenatis cras. Magna ac placerat vestibulum lectus mauris ultrices eros. Interdum posuere lorem ipsum dolor. Morbi tristique senectus et netus et malesuada fames ac. Lectus quam id leo in vitae turpis massa sed.
<br/><br/>
Amet facilisis magna etiam tempor orci eu lobortis. Ultrices neque ornare aenean euismod elementum nisi quis. Quis hendrerit dolor magna eget est lorem. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sed nisi lacus sed viverra tellus in hac habitasse. Ante in nibh mauris cursus mattis molestie a iaculis. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Sed blandit libero volutpat sed cras ornare. Libero volutpat sed cras ornare. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Non sodales neque sodales ut etiam sit. Etiam sit amet nisl purus in. Vulputate odio ut enim blandit volutpat maecenas. Curabitur vitae nunc sed velit dignissim sodales.
<br/><br/>
Purus gravida quis blandit turpis cursus in. Enim ut tellus elementum sagittis vitae. In cursus turpis massa tincidunt dui ut ornare lectus. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Mi proin sed libero enim sed faucibus. Iaculis urna id volutpat lacus laoreet. Id faucibus nisl tincidunt eget nullam non nisi est. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Lorem dolor sed viverra ipsum nunc. Eget est lorem ipsum dolor. Semper eget duis at tellus at urna condimentum mattis pellentesque. Amet mattis vulputate enim nulla aliquet porttitor.
<br/><br/>
Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Pretium lectus quam id leo in vitae. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Id faucibus nisl tincidunt eget nullam non nisi est. Augue lacus viverra vitae congue eu. Eget dolor morbi non arcu risus quis varius quam. Suspendisse sed nisi lacus sed. At tellus at urna condimentum mattis. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Neque volutpat ac tincidunt vitae semper quis lectus. Tellus at urna condimentum mattis. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Orci a scelerisque purus semper eget duis. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Proin sed libero enim sed faucibus turpis in eu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Sed arcu non odio euismod lacinia at. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Lectus vestibulum mattis ullamcorper velit sed.
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

//* función que haga el cálculo
/**
 * Para poder calcular el porcentaje se necesitan 3 valores
 * 1º posición del scroll superior scrollTop,
 * 2º la altura total del scroll scrollHeight
 * 3º la altura de la pantalla del cliente clientHeight
 * 
 * regla de 3: (posición superior / (altura total - altura del cliente)) * 100 = porcentaje
 */
const calcularPorcentajeScroll = (event) => {

    // desesctructuración
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams, usamos la barra de scroll para poder calcular según su posición
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event)),
    map(calcularPorcentajeScroll),
    tap(console.log)
);



// Esto envía el valor el porcentaje actual de la barra de scroll
// al div creado anteriormente
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})