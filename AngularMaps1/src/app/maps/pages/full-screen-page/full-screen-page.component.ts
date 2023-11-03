import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    //el elemento div de map puede ser nulo, hay que controlar el error
    if(!this.divMap) throw 'El elemento html no fue encontrado'

    console.log(this.divMap)
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

}
