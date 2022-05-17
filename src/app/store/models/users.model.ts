import {User} from '@model/user/user';

export interface UsersStateModel {
  data: User[];
  total: number;
}
