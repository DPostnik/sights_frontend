import {PaginatedList} from '@model/shared/pagination';
import {Sight} from '@model/sight/sight';

export interface SightsStateModel extends PaginatedList<Sight> {
  selectedSight?: Sight;
}
