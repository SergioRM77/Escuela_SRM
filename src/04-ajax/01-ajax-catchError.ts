import { catchError, map, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = 'https://api.github.com/ussers?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok) throw new Error (response.statusText);

    return response;
}


//metodo para Ajax, si falla por algún motivo avisa y retorna un
// observable vacío
const atrapaError = (error: AjaxError) => {
        console.warn('error en:', error);
        return of([])
}

const fetchPromesa = fetch(url);
// Ejemplo con Promesas
    // fetchPromesa
    // .then(manejaErrores)
    // .then(resp => resp.json())
    // .then(data => console.log('data: ', data))
    // .catch(err => console.warn('error en usauarios', err))

// más facil de entender y con error controlado
ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
).subscribe(users => console.log('usuarios', users))