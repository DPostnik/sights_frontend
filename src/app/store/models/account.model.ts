import {User} from '@model/user/user';
import {AuthState} from '@model/enums/auth-state';

export interface AccountStateModel {
  user: User;
  authState: AuthState;
}
