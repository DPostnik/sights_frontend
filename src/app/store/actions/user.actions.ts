import {User} from '@model/user/user';
import {PaginatedList} from '@model/shared/pagination';
import {UserModalData} from "@model/shared/userModalData";

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

export class UpdateUserInfo {
  static readonly type = '[Account] UpdateUserInfo';

  constructor(public user: UserModalData) {}
}

export class UpdateUserInfoSuccess {
  static readonly type = '[Account] UpdateUserInfoSuccess';

  constructor(public user: UserModalData) {}
}
