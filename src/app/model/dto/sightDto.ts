import {Coordinates} from '@model/coordinates';

export interface SightDto {
  categories?: string[];
  city?: string;
  coordinates: Coordinates;
  date?: Date;
  description: string;
  founder: string;
  mainImage: string;
  name: string;
}
