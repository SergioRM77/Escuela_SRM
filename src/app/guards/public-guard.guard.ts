import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { map, tap } from 'rxjs';

export const publicGuardActivate: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => {
        if(isAuthenticated) router.navigate(['./'])
      }),
    //necesitamos que devuleva un true si queremos que redirija
    //a login, ya que solo puede acceder si no está autenticado
    map(isAuthenticated => !isAuthenticated)
    )
};

export const publicGuardMatch: CanMatchFn = (route, state) => {
  // console.log("Can Match")
  // console.log(route, state)

  return true;
};
