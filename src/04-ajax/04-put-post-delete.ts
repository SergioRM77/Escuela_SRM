import {ajax} from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';


ajax.get(url, { })

ajax.post(url, {
    id: 1,
    nombre: 'sergio'
},{
    'mi-token': 'abc123'
}).subscribe(console.log)

ajax.put(url, {
    id: 1,
    nombre: 'sergio'
},{
    'mi-token': 'abc123'
})
// *El método delete no tiene body, solo header
ajax.delete(url,{
    'mi-token': 'abc123'
}).subscribe(console.log)

// *Otra forma
// se tiene más control y es más visual, podemos cambiar
// el método 
ajax({
    url: url,
    method: 'PUT',
    headers: {
        'mi-token': 'abc12356'
    },
    body: {
        id: 1,
        nombre: 'pepe'
    }
}).subscribe(console.log)