import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
    class="form-control"
    placeholder="Busacar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
  >
  <!-- keyup.enter se activa solo al pulsar enter
        #nombre es un valor de referencia para el input -->
  `
})

export class SearchBoxComponent {

  //ViewChild se utiliza para referenciar un elemento HTML
  //ViewChildren se utiliza para referenciar todos los elementos HTML
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private giftsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;


    this.giftsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    // console.log(this.giftsService.tagsHistory);
  }
}
