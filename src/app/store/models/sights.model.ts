import {PaginatedList} from '@model/pagination';
import {Coordinates} from '@model/coordinates';

export interface SightsStateModel extends PaginatedList<Sight> {
  selectedSight?: Sight;
}

export interface Sight {
  location: {
    country: string;
    region: string;
    city: string;
  };
  categories: string[];
  coordinates: Coordinates;
  date: Date;
  description: string;
  founder: string;
  id: number;
  images: string[];
  mainImage: string;
  name: string;
  rating: number;
}
