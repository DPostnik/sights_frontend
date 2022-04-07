export class GetSights {
  static readonly type = '[Sights] GetSights';

  constructor(public limit: number, public offset: number) {}
}

export class GetSightsSuccess {
  static readonly type = '[Sights] GetSightsSuccess';
}

export class GetSightsFailure {
  static readonly type = '[Sights] GetSightsFailed';
}
