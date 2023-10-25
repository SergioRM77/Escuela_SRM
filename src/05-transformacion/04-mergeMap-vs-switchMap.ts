import { fromEvent, interval, mergeMap, switchMap } from "rxjs";


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    //?solo mantiene una subscripción
    switchMap(() => interval$),
    //*tiene múltiples subscripciones simultáneas
    // mergeMap(() => interval$),
).subscribe(console.log)