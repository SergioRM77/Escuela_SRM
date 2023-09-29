import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';
import { UsersLSService } from '../../services/usersLS.service';

@Component({
  selector: 'users-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public user!: User;

  constructor(private _userService: UsersLSService) {
    this.user = this._userService.getUserLS();
   }



}
