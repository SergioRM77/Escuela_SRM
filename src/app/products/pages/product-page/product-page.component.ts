import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  private fb = inject(FormBuilder);//Nueva forma
  // constructor(private fb: FormBuilder){} // usar cualquiera de las dos

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })
  public color: string = '';

  changeColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color;
  }
}
