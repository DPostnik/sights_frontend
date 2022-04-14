import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {PlaceMark} from '@model/placeMark';
import {GetAllSights} from '@store/actions/sights.actions';
import {SightsState} from '@store/states/sights.state';
import {Sight} from '@store/models/sights.model';
import {environment} from '@env/environment';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = environment.mapApiKey;

@Component({
  selector: 'app-sights-map',
  templateUrl: './sights-map.component.html',
  styleUrls: ['./sights-map.component.scss'],
})
export class SightsMapComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;

  initLong: number = environment.longitude;
  initLat: number = environment.latitude;
  placeMarks: PlaceMark[] = [];

  subscription?: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetAllSights);

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [environment.longitude, environment.latitude],
      zoom: 9,
    });
    map.on('load', () => {
      map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2',
        },
        'source-layer': 'contour',
      });
    });
    map.on('load', () => {
      map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.3o7ubwm8',
        },
        'source-layer': 'RPD_Parks',
        layout: {
          visibility: 'visible',
        },
        paint: {
          'fill-color': 'rgba(61,153,80,0.55)',
        },
      });
    });
    map.on('load', () => {
      map.resize();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
