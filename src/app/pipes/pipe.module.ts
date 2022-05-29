import {NgModule} from '@angular/core';
import {RegionPipe} from '@pipes/region.pipe';
import {CityPipe} from '@pipes/city.pipe';
import {TruncatePipe} from '@pipes/truncate.pipe';

@NgModule({
  declarations: [RegionPipe, CityPipe, TruncatePipe],
  exports: [RegionPipe, CityPipe, TruncatePipe],
})
export class PipeModule {}
