import { Component } from '@angular/core';
import { UsersLSService } from '../../services/usersLS.service';
import { User } from '../../interfaces/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'users-form-login',
  templateUrl: './form-login.component.html',
  styles: [
  ]
})
export class FormLoginComponent {

  public email!: string;
  public password!: string;
  public user!: User;


  constructor(private _userService: UsersLSService, private _router: Router) {
   }

  loginUser(){
    this.validateUser();

    const userLS = this._userService.getUserLS();
    if(userLS.email === this.email && userLS.password === this.password){
      this._router.navigate(['/home']);
    }
  }

  private validateUser(){
    if(!this._userService.getUserLS()){
      this._router.navigate(['/register']);
      alert('Usuario no registrado');
    }
  }
}
