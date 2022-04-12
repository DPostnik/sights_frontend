import {Coordinates} from '@model/coordinates';

export interface PlaceMark extends Coordinates {
  id: number;
  iconColor: string;
  name: string;
}
