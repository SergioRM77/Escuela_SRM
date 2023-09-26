import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: 'name.component.html'
  template: `
    <h2>Este es el componente Counter</h2>
    <p>Contador: {{counter}}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  counter : number = 10;

  increaseBy(value : number): void {
    this.counter += value;
  }
  decreaseBy(value : number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  ngOnInit() { }
}
