import {User} from '@model/user/user';
import {PaginatedList} from '@model/shared/pagination';

export class GetUsers {
  static readonly type = '[Users] GetUsers';

  constructor(public limit?: number, public offset?: number, public search?: string) {}
}

export class GetUsersSuccess {
  static readonly type = '[Users] GetUsersSuccess';

  constructor(public users: PaginatedList<User>) {}
}

export class GetUsersFailure {
  static readonly type = '[Users] GetUsersFailure';
}
