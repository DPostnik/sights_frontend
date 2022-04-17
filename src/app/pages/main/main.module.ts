import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HomeComponent} from './home/home.component';
import {SightsMapComponent} from './sights-map/sights-map.component';
import {SightsListComponent} from './sights-list/sights-list.component';
import {SharedModule} from '@shared/shared.module';
import {SightsInfoComponent} from './sight-info/sights-info.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    SightsMapComponent,
    SightsListComponent,
    SightsInfoComponent,
  ],
  exports: [],
  providers: [],
})
export class MainModule {}
