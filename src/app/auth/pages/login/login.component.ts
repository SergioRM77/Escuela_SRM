import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public myForm: FormGroup = this.fb.group({
    id: [],
    name: ['', Validators.required],
    password: ['', [Validators.required]]
  })
  public nameSession: string = '';


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){}



  get user(){
    return {name: this.myForm.value.name, password: this.myForm.value.password}
  }
  onLogin(){
    // console.log(this.user)
    this.authService.login(this.user.name , this.user.password).subscribe(user =>{

      if(user === undefined){
        this.router.navigate(['/auth/login'])
        console.log('usuario no existe')
      }else{
        this.router.navigate(['/home'])
        console.log('usuario existe')

      }
    }
    )
  }
}
