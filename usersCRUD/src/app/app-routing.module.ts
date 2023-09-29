import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './users/pages/register/register.component';
import { LoginComponent } from './users/pages/login/login.component';
import { HomeComponent } from './users/pages/home/home.component';
import { SettingsComponent } from './users/pages/settings/settings.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
