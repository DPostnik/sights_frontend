import {Coordinates} from '@model/coordinates';
import {PlaceMarkColor} from '@model/enums/placeMarksColor';

export interface PlaceMark extends Coordinates {
  id: number;
  iconColor: PlaceMarkColor;
  properties: {
    [key: string]: string;
  };
}
