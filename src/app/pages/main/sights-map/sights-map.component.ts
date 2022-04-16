import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {GetAllSights} from '@store/actions/sights.actions';
import {SightsState} from '@store/states/sights.state';
import {Sight} from '@store/models/sights.model';
import {environment} from '@env/environment';
import mapBox from 'mapbox-gl';
import {MarkerColor} from '@model/enums/markerColor';

mapBox.accessToken = environment.mapApiKey;

@Component({
  selector: 'app-sights-map',
  templateUrl: './sights-map.component.html',
  styleUrls: ['./sights-map.component.scss'],
})
export class SightsMapComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;

  initLong: number = environment.longitude;
  initLat: number = environment.latitude;

  subscription?: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetAllSights);

    const map = new mapBox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [environment.longitude, environment.latitude],
      zoom: 9,
    });

    map.on('load', () => {
      map
        .addLayer({
          id: 'terrain-data',
          type: 'line',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-terrain-v2',
          },
          'source-layer': 'contour',
        })
        .resize();
    });

    map.on('click', (event) => {
      console.log(event.lngLat);
    });

    map.on('dblclick', (event) => {
      console.log('dblclick');
      event.preventDefault();
    });

    this.subscription = this.sights$.subscribe((sights) =>
      sights.forEach((s) => {
        new mapBox.Marker({
          color: MarkerColor.Default,
        })
          .setLngLat([s.coordinates.longitude, s.coordinates.latitude])
          .addTo(map);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
