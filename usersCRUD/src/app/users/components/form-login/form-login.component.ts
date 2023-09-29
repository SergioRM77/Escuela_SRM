import { Component } from '@angular/core';
import { UsersLSService } from '../../services/usersLS.service';
import { User } from '../../interfaces/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'users-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.css']
})

export class FormLoginComponent {

  public email!: string;
  public password!: string;
  public user!: User;


  constructor(private _userService: UsersLSService, private _router: Router) {
   }

  loginUser(){
      this._userService.loginUserLS(this.email, this.password);

  }

  private validateUser(): boolean {

    if(this._userService.existUserLS(this.email)){
      alert('Usuario no registrado');
      return false;
    }
    return true;
  }
}
