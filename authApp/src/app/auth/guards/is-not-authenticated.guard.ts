import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

// este nombre es solo para entender, no es recomendable porque es confuso
export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router      = inject(Router);

  if(authService.authStatus() === AuthStatus.autheticated){
    router.navigateByUrl('/dashboard');
    return false;
  }


  return true;
};
