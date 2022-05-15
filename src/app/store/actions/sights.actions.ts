import {PaginatedList} from '@model/shared/pagination';
import {Sight} from '@model/sight/sight';
import {SightDto} from '@model/dto/sightDto';
import {Coordinates} from '@model/location/coordinates';

export class GetSights {
  static readonly type = '[Sights] GetSights';

  constructor(public limit?: number, public offset?: number, public search?: string) {}
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

export class CreateSight {
  static readonly type = '[Sights] CreateSight';

  constructor(public dto: SightDto) {}
}

export class UpdateSight {
  static readonly type = '[Sight] UpdateSight';

  constructor(public sight: SightDto, public id: number) {}
}

export class SetMarkerCoords {
  static readonly type = '[Sight] SetMarkerCoords';

  constructor(public coordinates: Coordinates) {}
}
