import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature, PlacesResponse } from '../../interfaces/places.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedID: string= '';
  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
    ){}

  get isLoadingPlaces(){
    return this.placesServices.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesServices.places;
  }

  flyTo( place: Feature) {
    this.selectedID = place.id;
    const [ lng, lat ] = place.center;
    this.mapService.flyTo([lng, lat]);
  }

  getDirections(place: Feature){
    if(!this.placesServices.userLocation)
      throw Error('No hay userLocation');

      this.placesServices.deltePlaces();

    const start = this.placesServices.userLocation;
    const end = place.center as [number, number];
    this.mapService.getRouteBetweenPoints(start, end)
  }
}
