import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { authGuardActivate, authGuardMatch } from './auth/guards/auth.guard';
import { publicGuardActivate, publicGuardMatch } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [publicGuardActivate],
    canMatch: [publicGuardMatch],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    canActivate: [authGuardActivate],
    canMatch: [authGuardMatch],
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
