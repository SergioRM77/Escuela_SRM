import { of } from "rxjs";


// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));
const obs$  = of<number[]>(...[1,2,3,4],5,6);



// obs$.subscribe((v) => console.info(v));

//? Si el observable fuera asíncono primero se vería el mensaje de Inicio, luego
//? fin y por último se ejecutaría el obs$
console.log('Inicio de obs$');
obs$.subscribe({
    next: (v) => console.log(v),
    error: (e) => null,
    complete: () => console.info('Terminado secuencia') 
})
console.log('fin de obs$');

