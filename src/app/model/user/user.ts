import {Sight} from '@model/sight/sight';

export interface User {
  id: number;
  email: string;
  gmail: string;
  name: string;
  roles: Role[];
  favouriteSights: Sight[];
}

export interface Role {
  id: number;
  value: string;
  description: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
