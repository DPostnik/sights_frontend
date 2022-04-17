import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {environment} from '@env/environment';
import mapBox from 'mapbox-gl';
import {Observable, Subscription} from 'rxjs';
import {SightsState} from '@store/states/sights.state';
import {GetSights} from '@store/actions/sights.actions';
import {MarkerColor} from '@model/enums/markerColor';
import {Sight} from '@model/sight';
import {Router} from '@angular/router';

mapBox.accessToken = environment.mapApiKey;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;

  prevNewMarker?: mapBox.Marker;

  subscription?: Subscription;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(GetSights);

    const map = new mapBox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [environment.initLong, environment.initLat],
      zoom: 12,
    });

    map.doubleClickZoom.disable();

    map
      .on('load', () => map.resize())
      .on('click', (event) => console.log(event.lngLat))
      .on('dblclick', (event) => {
        this.prevNewMarker?.remove();

        const popup = new mapBox.Popup({
          anchor: 'bottom',
          closeOnClick: true,
          closeButton: false,
        })
          .setHTML(
            `<div class="marker-popup">
                <button class="marker-link" id="marker-link-create">Добавить место</button>
            </div>`,
          )
          .on('open', () => {
            document.getElementById('marker-link-create')?.addEventListener('click', () => {
              console.log('create sight'); // todo create sight
            });
          });

        this.prevNewMarker = new mapBox.Marker({color: MarkerColor.NEW})
          .setLngLat(event.lngLat)
          .setPopup(popup)
          .addTo(map);
      });

    this.subscription = this.sights$.subscribe((sights) =>
      sights.forEach((s) => {
        const id = `marker-link-${s.id}`;
        const popup = new mapBox.Popup({
          anchor: 'top',
          closeOnClick: true,
          closeButton: false,
        })
          .setHTML(
            `<div class="marker-popup">
              <h2 class="marker-name">${s.name}</h2>
              <p class="marker-description">${s.description}</p>
              <button class="marker-link" id="${id}">Перейти</button>
            </div>`,
          )
          .on('open', () => {
            document.getElementById(id)?.addEventListener('click', () => this.navigate(s.id));
          });

        new mapBox.Marker({color: MarkerColor.Default})
          .setLngLat([s.coordinates.longitude, s.coordinates.latitude])
          .setPopup(popup)
          .on('click', () => {
            console.log('marker clicked: ', s.id);
          })
          .addTo(map);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  navigate(id: number): void {
    this.router.navigate(['sight', id]).then();
  }
}
