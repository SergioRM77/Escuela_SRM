import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = [
    'Spider-Man', 'Iron-Man', 'Captain America', 'Thor', 'Hulk'
  ]
  public deletedhero?: string;

  removeLastHero(): void {
    this.deletedhero = this.heroes.pop();

  }

}
