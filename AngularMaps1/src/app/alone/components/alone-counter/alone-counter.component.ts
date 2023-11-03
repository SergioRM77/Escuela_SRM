import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'alone-counter',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './alone-counter.component.html',
  styleUrls: ['./alone-counter.component.css']
})
export class AloneCounterComponent {

  @Input()
  public counter: number = 10;
}
