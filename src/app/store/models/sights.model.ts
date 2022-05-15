import {PaginatedList} from '@model/shared/pagination';
import {Sight} from '@model/sight/sight';
import {Coordinates} from '@model/location/coordinates';

export interface SightsStateModel extends PaginatedList<Sight> {
  selectedSight?: Sight;
  markerCoords?: Coordinates;
}
