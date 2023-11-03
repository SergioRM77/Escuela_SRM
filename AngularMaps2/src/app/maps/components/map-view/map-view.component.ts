import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService, MapService } from '../../services';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement?: ElementRef;

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ){}

  ngAfterViewInit(): void {
    if(!this.placesService.userLocation)
      throw Error('No hay placesService.userLoaction');

    const map = new mapboxgl.Map({
      container: this.mapDivElement?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 9, // starting zoom
      });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>`);

        new Marker({color: 'red'})
          .setLngLat(this.placesService.userLocation)
          .setPopup(popup)
          .addTo(map);
    this.mapService.setMap(map);
  }



}
