import {Category} from '@model/category';
import {Country} from '@model/country';
import {Region} from '@model/region';
import {City} from '@model/city';

export interface Meta {
  categories: Category[];
  countries: Country[];
  regions: Region[];
  cities: City[];
}
