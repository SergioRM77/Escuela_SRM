import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = "Spiderman";
  }

  changeHeroAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = "ironman";
    this.age = 40;


    //** Esto no es recomendable siempre **/
    //Esto solo cambia el primer h1
    document.querySelector('h1')!.innerHTML = '<h1>Cambiado h1 desde Hero</h1>'

    //Para cambiarlos todos
    document.querySelectorAll('h2')!.forEach(element => {
      element.innerHTML = '<h2>Cambiando todos h2 desde Hero</h2>'
    })
  }
}
