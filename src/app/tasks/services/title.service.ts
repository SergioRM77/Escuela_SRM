import { Injectable, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnInit{

  public title!: Title
  constructor() { }

  ngOnInit(): void {
    this.title.setTitle("Web - Tareas")
  }

  set(title: string){
    this.title.setTitle(title)
  }

  get(): string{
    return this.title.getTitle()
  }
}
