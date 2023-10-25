import { of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap(t => console.log('tap', t)),
    //take dice que tome solo 3 valores, en el momento que lo tiene llama
    // a complete y no se sigue ejecutando nada más, ni siquiera recorre lo restante
    take(3)
)
.subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log("completado")
    });

