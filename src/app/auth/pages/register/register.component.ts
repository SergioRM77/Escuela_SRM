import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { NameValidator } from '../../validators/name-validator.service';
import { FieldValidator } from '../../validators/field-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public myForm: FormGroup = this.fb.group({
    id: [],
    name: ['', Validators.required, [this.nameValidator]],//
    email: ['', [Validators.required, Validators.pattern(this.fieldValidator.emailPattern)]],//FALTA EMAIL

    password: ['', [Validators.required]],//
    password2: ['', [Validators.required]]
  }, {
    validators: [
      this.fieldValidator.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })



  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private nameValidator: NameValidator,
    private fieldValidator: FieldValidator){}

  onSubmit(){

    if(!this.myForm.valid) return;
    this.authService.register(this.user).subscribe(user => {
      this.onSaveSession()
      this.router.navigateByUrl('/auth/login');
      this.myForm.markAllAsTouched();
      this.myForm.reset();
    });

  }

  isValidField(field: string){
    return this.authService.isValidField(this.myForm, field)
  }

  get user(): User{
    let {password2, ...user} = this.myForm.value
    return user as User
  }

  onSaveSession(): void{
    this.authService.saveSession(this.user.name, this.user.password)
  }
}
