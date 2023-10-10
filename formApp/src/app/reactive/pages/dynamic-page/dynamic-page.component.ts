import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })


  public newFavorite: FormControl = new FormControl('', Validators.required)

  constructor(private formBuilder: FormBuilder){ }


  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }


  isValidField(field: string) : boolean | null{
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors
      && formArray.controls[index].touched
  }

  getFieldError(field: string): string | null{

    if(!this.myForm.controls[field]) return null

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`

      }
    }

    return null;
  }

  onAddToFavorite():void{

    if(this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    // Esto si no estamos trabajando con formBuilder
    // this.favoriteGames.push(new FormControl(newGame, Validators.required))

    // Esto si es un formBuilder
    this.favoriteGames.push(
      this.formBuilder.control(newGame, Validators.required)
    );

    // poner input por defecto, vacío
    this.newFavorite.reset()

  }

  onDeleteFavorite(index:number): void{
    this.favoriteGames.removeAt(index)
  }


  onSubmit(): void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    // Para borrar el array de 2 maneras diferentes
    // (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([])
    (this.myForm.controls['favoriteGames']) = new FormArray([])


    this.myForm.reset();
  }
}
