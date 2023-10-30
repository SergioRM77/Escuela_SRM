import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    // checking es cuando no sabe si está autenticado o no
    if(this.authService.authStatus() === AuthStatus.checking){
      return false;
    }

    // si sabe si está autenticado o no, entonces redirige a login o register
    return true;
  });

  public authStatusCangedEffect = effect(() => {
    console.log('authStatus:', this.authService.authStatus())

    switch( this.authService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.autheticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAutenticated:
        this.router.navigateByUrl('/auth/login');
        return;

    }
  })
}
