import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';
import { UsersLSService } from '../../services/usersLS.service';

@Component({
  selector: 'users-form-register',
  templateUrl: './form-register.component.html',
  styles: [
  ]
})
export class FormRegisterComponent {

  public pwdConfirm: boolean = false;

  public user: User = {
    name: '',
    age: 0,
    color: '',
    isWork: false,
    email: '',
    password: ''
  };

  public passwordConfirm: string = '';

  constructor(private _userService: UsersLSService) { }

  saveUser(): void {
    console.log(this.passwordConfirm +  " - " + this.user.password);
    if (this.passwordConfirm !== this.user.password) {
      console.log("Contraseñas no coinciden");
      console.log(this.user);

    } else{
      this._userService.saveUserLS(this.user);
      this.user = this._userService.getUserLS()
      console.log(this._userService.getUserLS());
      console.log(this.user);
    }

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
