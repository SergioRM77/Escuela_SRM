import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';


//Este guard para roles de usuario
//Este guard para comprobar si cumple condición, en este caso estar registrado
export const authGuardActivate: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)


  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => console.log("Autenticado:", isAuthenticated)),
      tap(isAuthenticated => {
        if(!isAuthenticated) router.navigate(['./auth/login'])
      })
    )

};


export const authGuardMatch: CanMatchFn = (route, state) => {
  // console.log("Can Match")
  // console.log(route, state)

  return true;
};


