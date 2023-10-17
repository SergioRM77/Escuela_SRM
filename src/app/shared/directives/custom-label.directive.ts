import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit, OnChanges{
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value:string){
    this._color= value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    console.log(value)
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log(el)
    this.htmlElement = el;

    // this.htmlElement.nativeElement.innerHTML = 'holaa'
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setErrorMessage();
  }
  ngOnInit(): void {
    // console.log('Directiva -ngOnInit')
    this.setStyle()
    this.setErrorMessage();
  }

  setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void{
    if(!this.htmlElement) return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = 'Mínimo de 6 caracteres requerido';
      return;
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'Formato email no válido';
      return;
    }


  }

}
