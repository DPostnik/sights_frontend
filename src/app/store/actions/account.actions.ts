import {Credentials} from '@model/user/credentials';
import {AuthenticatedUser} from '@model/user/user';
import {CreateUserDto} from '@model/dto/userDto';

export class LogIn {
  static readonly type = '[Account] LogIn';

  constructor(public credentials: Credentials) {}
}

export class LogInSuccess {
  static readonly type = '[Account] LogInSuccess';

  constructor(public user: AuthenticatedUser) {}
}

export class RefreshToken {
  static readonly type = '[Account] RefreshToken';

  constructor(public refreshToken: string) {}
}

export class Register {
  static readonly type = '[Account] Register';

  constructor(public dto: CreateUserDto) {}
}

export class RegisterFailure {
  static readonly type = '[Account] RegisterFailure';

  constructor(public error: string) {}
}

export class RegisterSuccess {
  static readonly type = '[Account] RegisterSuccess';
}
