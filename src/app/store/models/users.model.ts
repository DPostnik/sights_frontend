import {User} from '@model/user';

export interface UsersStateModel {
  data: User[];
  total: number;
  selectedUser: User | undefined;
}
