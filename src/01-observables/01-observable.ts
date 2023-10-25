import { Observable, Observer } from 'rxjs';



// const obs$ = Observable.create(); // esto no se suele utilizar
const obs$ =  new Observable<string | number>( subs => {
    // next emite el valor que indique a los que se subscriben
    subs.next('Hola');
    subs.next('Mundo');
    
    // **Forzar un error
    // const a = undefined;
    // a.nombre = "asdf"
    
    // complete termina la subscripción, lo que hay después no se ejecuta
    subs.complete();
    
    subs.next('Hola');
    subs.next(2);
});


// para llamar a un observable necesitamos subscribirnos
// obs$.subscribe(resp => console.log(resp))
// obs$.subscribe(console.log) //Esto también es válido

// Los subscribe internamente tienen 3 valores, separados por ','
// 1º es el next, 2º es el error (consecuencia posible) 
// y 3º es el complete: void, no devuleve ni ejecuta nada después
// obs$.subscribe(
    //     resp_next => console.log(resp_next),
    //     error => console.warn("Esto es un error: ", error),
    //     () => console.log("completado")
    
    // );


// Al crear un objeto de tipo Observer (interfaz) definimos qué va a hacer
// el next, error y complete
const observer: Observer<any> = {
    next: val => console.log('siguiente [next]: ', val),
    error: error => console.warn("error [error]: ", error),
    complete: () => console.info("Completado [obs]")
}

// podemos llamar direcamente al objeto observer, porque ya está definido
// dentro qué es lo que va a hacer en cada caso
obs$.subscribe(observer)