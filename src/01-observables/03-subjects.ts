/**
 * Los subjects de RxJs son un tipo de Observable especial 
 * que nos permiten realizar diversas tareas como el multicasting, 
 * es decir, compartir exactamente el mismo stream de datos con 
 * todas las subscripciones sin preocuparnos del tipo de 
 * Observable que estamos manejando.
 */
import { Observable, Observer, Subject } from 'rxjs';

//? El complete() no es lo mismo que unsubscribe()
const observer: Observer<any> = {
    next: val => console.log('[next]: ', val),
    error: error => console.warn("[error]: ", error),
    complete: () => console.info("Completado")
}


const intervalo$ = new Observable<number>(subs => {
    const IntervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );
    
    return () =>{
        clearInterval(IntervalID)
        console.log("Intervalo destruido")
    };
})

/**
 * 1- Casteo múltiple, distribuir el mismo valor a todos los subscritos
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();

const intervalSubject = intervalo$.subscribe(subject$);


// const subs1 = intervalo$.subscribe(rand => console.log('subs1', rand))
// const subs2 = intervalo$.subscribe(rand => console.log('subs2', rand))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

// *Al ser un Observable tambien puede usar next, error y complete
setTimeout(() => {
    subject$.next(10);

    subject$.complete();
    intervalSubject.unsubscribe();
}, 3500)