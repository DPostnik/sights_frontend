import {Sight} from '@store/models/sights.model';
import {PaginatedList} from '@model/pagination';

export class GetSights {
  static readonly type = '[Sights] GetSights';

  constructor(
    public limit: number,
    public offset: number,
    public search?: string,
  ) {}
}

export class GetAllSights {
  static readonly type = '[Sights] GetAllSights';

  constructor(public limit: number, public offset: number) {}
}

export class GetSightsSuccess {
  static readonly type = '[Sights] GetSightsSuccess';

  constructor(public sights: PaginatedList<Sight>) {}
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

  constructor(public sight: Sight) {}
}

export class GetSightFailure {
  static readonly type = '[Sights] GetSightFailed';
}
