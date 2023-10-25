import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'klerith';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ),
    gists: ajax.getJSON(
        // Esto da error a propósito, para controlar los fallos
        `${GITHUB_API_URL}/${GITHUB_USER}/gistsXXX·$!·$`
    ).pipe(
        catchError(err => of(err))
    ),
}).pipe(
    catchError(err => of(err))
)
.subscribe(console.log)