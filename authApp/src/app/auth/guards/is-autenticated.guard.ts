import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAutenticatedGuard: CanActivateFn = (route, state) => {

  const url = state.url;
  localStorage.setItem('path', url);

  const authService = inject(AuthService);
  const router      = inject(Router);

  // con AuthStatus vemos el estado del usuario
  if (authService.authStatus() === AuthStatus.autheticated) {
    return true;
  }

  if (authService.authStatus() === AuthStatus.checking) {
    return false;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
