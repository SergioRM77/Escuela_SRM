import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  public title: string = "Home"


  constructor(private titleService: TitleService, private _title: Title){

  }
  ngOnInit(): void {
    // this.titleService.set("Web Tareas Home")
    this._title.setTitle("Home")
  }



}
