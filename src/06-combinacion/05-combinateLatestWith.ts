import { combineLatest, combineLatestWith, fromEvent, map } from "rxjs";

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//     keyup$.pipe(
//         map(key => key.type)
//     ), 
//     click$.pipe(
//         map(click => click.type)
//     ),
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@example.com';
input2.type = 'password';
input2.placeholder = '********';

document.querySelector('body').append(input1, input2);

// helpers
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(elm => elem['value'])
        )
    }
//! combinateLatest(): Deprecated
// combineLatest(
//     getInputStream(input1),
//     getInputStream(input2)
// ).subscribe(console.log)


//? Esto es lo aceptado
const input1Changes$ = fromEvent(input1, 'change');
const input2Changes$ = fromEvent(input2, 'change');


input1Changes$.pipe(
    combineLatestWith(input2Changes$),
    map(([e1, e2]) => ({e1, e2}))
)
.subscribe(x => console.log(x));