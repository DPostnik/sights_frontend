import {Component, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {environment} from '@env/environment';
import mapBox from 'mapbox-gl';
import {Observable, Subscription} from 'rxjs';
import {SightsState} from '@store/states/sights.state';
import {GetSights, SetMarkerCoords} from '@store/actions/sights.actions';
import {MarkerColor} from '@model/enums/markerColor';
import {Sight} from '@model/sight/sight';
import {Router} from '@angular/router';
import {MapPopupCreateComponent} from '@components/map-popups/map-popup-create/map-popup-create.component';
import {MapPopupDetailComponent} from '@components/map-popups/map-popup-detail/map-popup-detail.component';

mapBox.accessToken = environment.mapApiKey;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;

  @Input() createButton?: boolean = true;

  prevNewMarker?: mapBox.Marker;

  subscription?: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private viewContainerRef: ViewContainerRef,
  ) {}

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
      .once('sourcedata', () => map.resize())
      .on('click', (event) => console.log(event.lngLat))
      .on('dblclick', (event) => {
        this.prevNewMarker?.remove();

        const popupComponent = this.viewContainerRef.createComponent(MapPopupCreateComponent);

        const popup = new mapBox.Popup({
          anchor: 'bottom',
          closeOnClick: true,
          closeButton: false,
        })
          .setDOMContent(popupComponent.location.nativeElement)
          .on('open', () => {
            document
              .querySelectorAll('.mapboxgl-popup')
              .forEach((p) => (p.className += ' popup-hidden opacity1'));
          });

        this.prevNewMarker = new mapBox.Marker({color: MarkerColor.NEW})
          .setLngLat(event.lngLat)
          .addTo(map);

        if (this.createButton) {
          this.prevNewMarker.setPopup(popup).togglePopup();
        }

        this.store.dispatch(
          new SetMarkerCoords({
            latitude: event.lngLat.lat,
            longitude: event.lngLat.lng,
          }),
        );
      });

    this.subscription = this.sights$.subscribe((sights) =>
      sights.forEach((s) => {
        const popupComponent = this.viewContainerRef.createComponent(MapPopupDetailComponent);
        popupComponent.instance.sight = s;

        const popup = new mapBox.Popup({
          anchor: 'top',
          closeOnClick: true,
          closeButton: false,
        })
          .setDOMContent(popupComponent.location.nativeElement)
          .on('open', () => {
            document
              .querySelectorAll('.mapboxgl-popup')
              .forEach((p) => (p.className += ' opacity1'));
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
}
