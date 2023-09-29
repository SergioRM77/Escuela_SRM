import { Component } from '@angular/core';
import { UsersLSService } from '../../services/usersLS.service';
import { User } from '../../interfaces/user.interfaces';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
;


@Component({
  selector: 'users-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.css']
})
export class FormSettingsComponent {

  public pwdConfirm: boolean = false;
  public user!: User;
  public passwordConfirm: string = ""
  constructor(private _userService: UsersLSService, private router: Location, private route: Router){
    this.user = this._userService.getUserLS();
  }

  saveChangesUser(): void {
    console.log(this.passwordConfirm +  " - " + this.user.password);
    if (this.passwordConfirm !== this.user.password) {

      console.log("Contraseñas no coinciden");

    }else{
      this._userService.saveUserLS(this.user);
      console.log(this.user);


    }
  }

  deleteUser(){
    this._userService.deleteUserLS();
    this.route.navigate(['login']);
  }


  checkValidation(event: Event){
    const inputValue = (event.target as HTMLInputElement).value;
    if(inputValue !== this.user.password){
      this.pwdConfirm = false;
    }else{
      this.pwdConfirm = true;
    }
  }
}
