import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;
  public currentCenter: LngLat = new LngLat(-4.418, 36.738);

  public zoom: number = 10;

  ngAfterViewInit(): void {

    //el elemento div de map puede ser nulo, hay que controlar el error
    if(!this.divMap) throw 'El elemento html no fue encontrado'

    console.log(this.divMap)
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners();
  }

  mapListeners(){

    if(!this.map) throw 'Mapa no existe';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom()
    })

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18)
    })

    this.map.on('move', (ev) => {
      this.currentCenter = this.map!.getCenter();
    })
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom = Number(value)
    this.map?.zoomTo(this.zoom)
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
