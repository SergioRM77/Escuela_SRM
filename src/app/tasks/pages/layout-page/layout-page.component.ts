import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { Event } from '@angular/router';
import Swal from 'sweetalert2';
import { TitleService } from '../../services/title.service';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit{

  constructor(private titleSercice: TitleService){

  }
  ngOnInit(): void {
    this.titleChild = this.titleSercice.get();
  }

  public titleChild?: string;

  public sidebarItems = [
    { label: 'Home', icon: 'home', url: '/home'},
    { label: 'Nueva Tarea', icon: 'add', url: '/home/new-task'},

  ]

  public value: number = 124.25
  createTask():void{
    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="${this.value}">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup()?.querySelector('#login')
        const password = Swal.getPopup()?.querySelector('#password')
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
      Login: ${result.value.login}
      Password: ${result.value.password}
      `.trim())
    })
  }

  getTitleChild(title: string){
    this.titleChild = title;
  }

}
