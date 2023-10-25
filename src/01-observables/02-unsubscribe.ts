import { Observable, Observer } from 'rxjs';

//? El complete() no es lo mismo que unsubscribe()
const observer: Observer<any> = {
    next: val => console.log('[next]: ', val),
    error: error => console.warn("[error]: ", error),
    complete: () => console.info("Completado")
}

const intervalo$ = new Observable(subs => {

    let counter = 0;

    //*Aunque haga un unsubscribe y finalice la subscripción, el
    //*setTimeout() interno sigue ejecutándose
    const interval = setInterval(() => {
        subs.next(counter);
        console.log(counter)
        counter++;

    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500)

    //! INDISPENSABLE!! para poder finalizar un interval dentro de Observable
    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido!")
    }
})

// un subscribe(subscriptor) siempre retorna una subscription(resultado de subscripción)
const subscripcion1 = intervalo$.subscribe(observer)
const subscripcion2 = intervalo$.subscribe(observer)
const subscripcion3 = intervalo$.subscribe(observer)

// *1ª Forma: la original
setTimeout(() => {
    //*Aunque haga un unsubscribe y finalice la subscripción, el
    //*setTimeout() interno sigue ejecutándose
    subscripcion1.unsubscribe()
    subscripcion2.unsubscribe()
    subscripcion3.unsubscribe()

    console.log("Completado el timeout")
    // Cuando hacemos una nueva subscripción,
    // subscripcion1.unsubscribe()
    // const subscripcion2 = intervalo$.subscribe(num => console.log('Num: ', num))
}, 6000);


// *2ª forma: Encadenar subscripciones a la subscripción original

subscripcion1.add(subscripcion2);
subscripcion1.add(subscripcion3);

setTimeout(() => {

    subscripcion1.unsubscribe()
    console.log("Completado el timeout")

}, 6000);
