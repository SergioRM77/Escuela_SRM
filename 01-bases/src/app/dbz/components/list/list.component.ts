import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    // Este es el valor por defecto, si entra contenido se borra
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // TODO: Emitir el id del character
    // this.characterList.splice(indice, 1);

    //Si no existe id, no sigas
    if (!id)   return;

    //Esto emite el valor al padre
    this.onDelete.emit(id);
  }
}
