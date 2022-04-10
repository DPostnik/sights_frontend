import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {getPlaceMarks} from '../../../../__MOCKS__/mock.service';
import {PlaceMark} from '../../../model/placeMark';

@Component({
  selector: 'app-sights-map',
  templateUrl: './sights-map.component.html',
  styleUrls: ['./sights-map.component.scss'],
})
export class SightsMapComponent implements OnInit {
  longitude: number = environment.longitude;
  latitude: number = environment.latitude;
  data: PlaceMark[] = [];

  ngOnInit() {
    this.data = getPlaceMarks();
  }

  onPlaceMarkClick() {
    // todo открыть страницу
  }
}
