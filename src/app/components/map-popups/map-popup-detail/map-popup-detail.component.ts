import {Component, Input} from '@angular/core';
import {Sight} from '@model/sight/sight';

@Component({
  selector: 'app-map-popup-detail',
  templateUrl: './map-popup-detail.component.html',
  styleUrls: ['./map-popup-detail.component.scss'],
})
export class MapPopupDetailComponent {
  @Input() sight!: Sight;
}
