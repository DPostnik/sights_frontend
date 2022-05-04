import {AuthenticatedUser, User} from '@model/user/user';

export const initialUser: User = {
  email: '',
  favouriteSights: [],
  gmail: '',
  id: 0,
  name: '',
  roles: [],
};

export const initialAuthenticatedUser: AuthenticatedUser = {
  ...initialUser,
  token: '',
  refreshToken: '',
};
