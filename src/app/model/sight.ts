import {Coordinates} from '@model/coordinates';

export interface Sight {
  categories?: string[];
  coordinates: Coordinates;
  date?: Date;
  description: string;
  founder: string;
  id: number;
  images: string[];
  location: {
    country: string;
    region: string;
    city: string;
  };
  mainImage: string;
  name: string;
  rating: number;
}
