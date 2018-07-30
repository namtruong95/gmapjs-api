import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import {} from 'googlemaps';

import { MapsAPILoader } from '@agm/core';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('Address') private _address: ElementRef;

  title = 'gmapjs-api';
  constructor(
    private _mapsAPILoader: MapsAPILoader,
    private _ngZone: NgZone,
  ) {

  }

  ngAfterViewInit() {
    // console.log(google, 111);
    this._initAutoCompleteGmap();
    this.calcDistance();
  }

  private _initAutoCompleteGmap() {
    this._mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this._address.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this._ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  private calcDistance() {
    this._mapsAPILoader.load().then(() => {
      const origin2 = '55.930385,-3.118425';
      const destinationA = 'Stockholm, Sweden';

      const service = new google.maps.DistanceMatrixService();

      service.getDistanceMatrix({
        origins: [origin2],
        destinations: [destinationA],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, this.callback);
    });
  }

  private callback = (response, status) => {
    console.log(response, status, 1111);
  }
}
