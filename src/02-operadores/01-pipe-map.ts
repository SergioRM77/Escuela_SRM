import { from, fromEvent, map, mapTo, of, pluck, range, tap } from "rxjs";

// los datos entregados o las operaciones deben de estar 
// lo mayor procesadas posibles, de tal manera que el 
// subscribe tenga que hacer lo mínimo
range(1,5)
    // pipe nos permite encadenar operadores dentro uno detras de otro,
    // separados por comas ',' (todo lo que haya debe retornar algo)
    .pipe(
        // map: mapea y aplica una operación a cada valor recibido
        map<number, string>(valor => (valor * 10).toString())
    )
    .subscribe(console.log)


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(
    map(event => event.key),
    // map(event => event.target['baseURI'])
    ).subscribe(key => console.log("tecla mapeada: ", key))
    
    
    //!deprecated, se puede hacer lo mismo con map()
    // pluck()
    // mapTo()
