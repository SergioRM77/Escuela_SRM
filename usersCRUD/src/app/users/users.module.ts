import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormSettingsComponent } from './components/form-settings/form-settings.component';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormRegisterComponent,
    RegisterComponent,
    HomeComponent,
    SettingsComponent,
    FormSettingsComponent
  ],

})
export class UsersModule { }
