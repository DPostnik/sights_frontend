import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {PlaceMark} from '@model/placeMark';
import {GetAllSights} from '@store/actions/sights.actions';
import {SightsState} from '@store/states/sights.state';
import {Sight} from '@store/models/sights.model';
import {PlaceMarkColor} from '@model/enums/placeMarksColor';
import {environment} from '@env/environment';
import {Router} from '@angular/router';

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

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(GetAllSights);

    this.subscription = this.sights$.subscribe((sights) => {
      this.placeMarks = sights.map((s) => ({
        longitude: s.coordinates.longitude,
        latitude: s.coordinates.latitude,
        iconColor: PlaceMarkColor.Default,
        id: s.id,
        name: s.name,
      }));
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onPlaceMarkClick(placeMark: PlaceMark) {
    this.router.navigate(['sight', placeMark.id]).then();
  }
}
