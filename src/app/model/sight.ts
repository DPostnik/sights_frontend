import {Coordinates} from '@model/coordinates';

export interface CreateSightDto {
  categories?: string[];
  coordinates: Coordinates;
  date?: Date;
  description: string;
  founder: string;
  name: string;
  mainImage: string;
  city?: string;
}

export interface Sight extends Omit<CreateSightDto, 'city'> {
  id: number;
  images: string[];
  rating: number;
  location: {
    country: string;
    region: string;
    city: string;
  };
}
