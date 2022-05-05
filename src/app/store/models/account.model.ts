import {User} from '@model/user/user';

export interface AccountStateModel {
  user: User;
  isAuth: boolean;
}
