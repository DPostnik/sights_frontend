import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {environment} from '@env/environment';
import mapBox from 'mapbox-gl';
import {Observable, Subscription} from 'rxjs';
import {SightsState} from '@store/states/sights.state';
import {GetSights} from '@store/actions/sights.actions';
import {MarkerColor} from '@model/enums/markerColor';
import {Sight} from '@model/sight';

mapBox.accessToken = environment.mapApiKey;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;

  subscription?: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetSights);

    const map = new mapBox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [environment.initLong, environment.initLat],
      zoom: 9,
    });

    map.on('load', () => {
      map.resize();
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
        const marker = new mapBox.Marker({
          color: MarkerColor.Default,
        })
          .setLngLat([s.coordinates.longitude, s.coordinates.latitude])
          .addTo(map);
        marker.getElement().addEventListener('click', () => {
          console.log('marker clicked: ', s.id);
        });
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
