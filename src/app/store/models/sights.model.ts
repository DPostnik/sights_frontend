import {PaginatedList} from '../../model/pagination';

export interface SightsStateModel extends PaginatedList<ISight> {
  selectedSight?: ISight;
}

export interface ISight {
  categories: string[];
  city: string;
  coordinates: ICoordinates;
  country: string;
  date: Date;
  description: string;
  founder: string;
  id: number;
  images: string[];
  mainImage: string;
  name: string;
  rating: number;
  region: string;
}

export interface ICoordinates {
  longitude: number;
  latitude: number;
}
