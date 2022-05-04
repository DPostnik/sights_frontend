import {Category} from '@model/sight/category';
import {Country} from '@model/location/country';
import {Region} from '@model/location/region';
import {City} from '@model/location/city';

export interface Meta {
  categories: Category[];
  countries: Country[];
  regions: Region[];
  cities: City[];
}
