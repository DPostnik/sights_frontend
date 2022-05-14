import {Sight} from '@model/sight/sight';

export interface User {
  id: number;
  email: string;
  gmail: string;
  name: string;
  role: string;
  favouriteSights: Sight[];
  photoUrl?: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
