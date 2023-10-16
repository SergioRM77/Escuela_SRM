import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements
      OnInit,
      OnDestroy,
      DoCheck,
      AfterContentChecked,
      AfterContentInit,
      AfterViewChecked,
      AfterViewInit,
      OnChanges
  {

  public isProductVisible = true;
  public currentPrice: number = 10;

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('PADRE: ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('PADRE: ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('PADRE: ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('PADRE: ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('PADRE: ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('PADRE: ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('PADRE: ngOnDestroy');
  }

  increasePrice(){
    this.currentPrice++;
  }

}
