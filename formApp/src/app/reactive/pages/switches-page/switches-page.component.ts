import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotification: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  public person = {
    gender: 'F',
    wantNotification: false
  }
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    // Desestructurar, saca una único valor y guarda el resto en otro
    const {termsAndConditions , ...newPerson} = this.myForm.value
    this.person = newPerson

    console.log(this.myForm.value)
    console.log(this.person)
    console.log(this.person)
  }

  isValidfield(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }
}
