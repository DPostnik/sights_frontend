import {AuthenticatedUser} from '@model/user/user';

export interface AccountStateModel extends AuthenticatedUser {
  isAuth: boolean;
}
