import {Coordinates} from '@model/location/coordinates';

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
