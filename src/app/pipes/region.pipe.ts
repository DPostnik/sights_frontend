import {Pipe, PipeTransform} from '@angular/core';
import {Region} from '@model/location/region';

@Pipe({
  name: 'region',
})
export class RegionPipe implements PipeTransform {
  transform(regions: Region[] | undefined, countryId = 0): Region[] {
    if (!regions?.length) {
      return [];
    }
    if (!countryId) {
      return regions;
    }
    return regions?.filter((item) => item.countryId === countryId);
  }
}
