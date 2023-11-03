import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vyb21hIiwiYSI6ImNsbnN3eGtscTFtaXMyaW9kOWpvejFleGQifQ.W1Koyh0rxCdTf7GCph8jmQ';
if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
