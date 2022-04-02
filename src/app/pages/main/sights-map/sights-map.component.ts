import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PlaceMark, placeMarks} from '../../../../data';

@Component({
    selector: 'app-sights-map',
    templateUrl: './sights-map.component.html',
    styleUrls: ['./sights-map.component.scss'],
})
export class SightsMapComponent {
    longitude: number = environment.longitude;
    latitude: number = environment.latitude;
    data: PlaceMark[] = placeMarks;
}
