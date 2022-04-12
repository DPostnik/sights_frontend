import {PaginatedList} from '../../model/pagination';

export interface SightsStateModel extends PaginatedList<ISight> {
  selectedSight?: ISight;
}

export interface ISight {
  categories: string[];
  coordinates: ICoordinates;
  location: {
    country: string;
    region: string;
    city: string;
  };
  date: Date;
  description: string;
  founder: string;
  id: number;
  images: string[];
  mainImage: string;
  name: string;
  rating: number;
}

export interface ICoordinates {
  longitude: number;
  latitude: number;
}
