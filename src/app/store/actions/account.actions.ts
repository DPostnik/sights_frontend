import {Credentials} from '@model/user/credentials';
import {Tokens} from '@model/user/user';
import {CreateUserDto} from '@model/dto/userDto';
import {UserModalData} from '@model/shared/userModalData';

export class SignIn {
  static readonly type = '[Account] SignIn';

  constructor(public credentials: Credentials) {}
}

export class SignInSuccess {
  static readonly type = '[Account] SignInSuccess';

  constructor(public tokens: Tokens) {}
}

export class SignInFailure {
  static readonly type = '[Account] SignInFailure';
}


export class RefreshToken {
  static readonly type = '[Account] RefreshToken';
}

export class SignUp {
  static readonly type = '[Account] Register';

  constructor(public dto: CreateUserDto) {}
}

export class SignUpFailure {
  static readonly type = '[Account] RegisterFailure';

  constructor(public error: string) {}
}

export class SignUpSuccess {
  static readonly type = '[Account] RegisterSuccess';
}

export class Logout {
  static readonly type = '[Account] RegisterSuccess';
}

export class Initialize {
  static readonly type = '[Account] Initialize';
}

export class HandleHttpError {
  static readonly type = '[Account] HandleHttpError';
}

export class UpdateAccountInfo {
  static readonly type = '[Account] UpdateAccountInfo';
  constructor(public data: UserModalData) {}
}
