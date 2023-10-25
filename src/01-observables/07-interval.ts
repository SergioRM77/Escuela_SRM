import { Observer, interval, timer } from "rxjs";


const observer: Observer<any> = {
    next: val => console.log('[next]: ', val),
    error: error => console.warn("[error]: ", error),
    complete: () => console.info("Completado")
}

const interval$ = interval(1000);

const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);//es como crear un interval que ejecuta en 2 segundos, sin complete

console.log('inicio');
// interval$.subscribe(observer);//nunca ejecutaría complete
timer$.subscribe(observer)
console.log('fin');

/**
 * Podemos programar mensajes o popup, por ejemplo un usuario se registra
 * en una página y a los 20 segundos, a la semana o a los meses podemos 
 * programar un mensaje para advertir lo que sea, como que la sesión ha 
 * expirado o un recordatorio.
 * 
 * Esto es válido si está guardado en DB o en localStorage, si no se ejecuta
 * siempre
 */
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer2$ = timer(hoyEn5);

console.log("hora actual:", new Date())
timer2$.subscribe(hora => console.log("hora programada a 5 segundos: ", hoyEn5))