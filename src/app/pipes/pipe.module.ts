import {NgModule} from "@angular/core";
import {RegionPipe} from "@pipes/region.pipe";
import {CityPipe} from "@pipes/city.pipe";

@NgModule({
  declarations: [RegionPipe, CityPipe],
  exports: [RegionPipe, CityPipe],
})
export class PipeModule {}
