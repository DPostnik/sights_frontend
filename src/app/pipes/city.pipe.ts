import {Pipe, PipeTransform} from '@angular/core';
import {City} from "@model/location/city";

@Pipe({
  name: 'city',
})
export class CityPipe implements PipeTransform {
  transform(cities: City[] | undefined, region_id = 0): City[] {
    if (!cities?.length) {
      return [];
    }
    if (!region_id) {
      return cities;
    }
    return cities.filter((item) => item.regionId === region_id);
  }
}
