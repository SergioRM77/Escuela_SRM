import { of, interval, take, delay, forkJoin, timer } from 'rxjs';


const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3)); //0,1,2
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// ! forkJoin(): deprecated
//no emite el resultado final hasta que termina el último observable
forkJoin(
    numeros$, interval$, letras$
).subscribe(console.log);

// ? esta es la forma actual
const observable = forkJoin({
    foo: of(1, 2, 3, 4),
    bar: Promise.resolve(8),
    baz: timer(4000)
  });
  observable.subscribe({
   next: value => console.log(value),
   complete: () => console.log('This is how it ends!'),
  });
   