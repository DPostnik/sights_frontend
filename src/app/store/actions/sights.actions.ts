import {PaginatedList} from 'src/app/model/pagination';
import {ISight} from '../models/sights.model';

export class GetSights {
  static readonly type = '[Sights] GetSights';

  constructor(
    public limit: number,
    public offset: number,
    public search?: string,
  ) {}
}

export class GetSightsSuccess {
  static readonly type = '[Sights] GetSightsSuccess';

  constructor(public sights: PaginatedList<ISight>) {}
}

export class GetSightsFailure {
  static readonly type = '[Sights] GetSightsFailed';
}

export class GetSight {
  static readonly type = '[Sights] GetSight';

  constructor(public id: number) {}
}

export class GetSightSuccess {
  static readonly type = '[Sights] GetSightSuccess';

  constructor(public sight: ISight) {}
}

export class GetSightFailure {
  static readonly type = '[Sights] GetSightFailed';
}
