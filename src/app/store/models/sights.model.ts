import {PaginatedList} from '@model/pagination';
import {Sight} from '@model/sight';

export interface SightsStateModel extends PaginatedList<Sight> {
  selectedSight?: Sight;
}
