import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  };

  constructor(
    private placesApi: PlacesApiClient,
    //^ Cuidado al llamar servicios dentro de servicios,
    //^  puede crear dependencia cíclica
    private mapService: MapService
    ) {
      this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation)
        },
        (error) => {
          console.log('No se pudo optener la geolocatión');
          console.log(error);
          reject();
        }
      )
    })
  }

  getPlacesByQuery(query: string = ''){
    if(query.length === 0){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }
    if(!this.userLocation) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    // antes 'https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&access_token=pk.eyJ1Ijoic2Vyb21hIiwiYSI6ImNsbnN3eGtscTFtaXMyaW9kOWpvejFleGQifQ.W1Koyh0rxCdTf7GCph8jmQ'
    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        // antes [number, number]
        proximity: this.userLocation.join(',')
        //despues -4.426682807018096,36.71954578744136 -> string para url
      }
    })
    .subscribe(resp => {
      this.isLoadingPlaces = false;
      this.places = resp.features;

      this.mapService.createMarkersFromPlaces(this.places, this.userLocation!);
    })

  }

  deltePlaces(){
    this.places = [];
  }
}
