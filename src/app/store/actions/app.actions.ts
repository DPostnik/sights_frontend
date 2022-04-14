import {Meta} from '@model/meta';

export class StartLoading {
  static readonly type = '[App] StartLoading';
}

export class EndLoading {
  static readonly type = '[App] EndLoading';
}

export class GetMeta {
  static readonly type = '[App] GetMeta';
}

export class GetMetaSuccess {
  static readonly type = '[App] GetMetaSuccess';

  constructor(public meta: Meta) {}
}

export class GetMetaFailure {
  static readonly type = '[App] GetMetaFailure';
}
