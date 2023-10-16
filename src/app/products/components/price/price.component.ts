import { Component, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:Number = 0;

  public interval$?: Subscription;

  constructor(){}

  ngOnInit(): void {
    console.log('HIJO: ngOnInit');

    this.interval$ = interval(1000).subscribe(value => console.log(value))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('HIJO: ngOnChanges', {changes});
  }
  ngOnDestroy(): void {
    console.log('HIJO: ngOnDestroy');
    this.interval$?.unsubscribe()
  }
}
