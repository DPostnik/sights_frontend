import {NgModule} from '@angular/core';
import {MainLayoutComponent} from '@pages/main/main-layout/main-layout.component';
import {HomeComponent} from '@pages/main/home/home.component';
import {SightsMapComponent} from '@pages/main/sights-map/sights-map.component';
import {SightsListComponent} from '@pages/main/sights-list/sights-list.component';
import {SharedModule} from '@shared/shared.module';
import {SightsInfoComponent} from '@pages/main/sight-info/sights-info.component';
import {SuggestSightComponent} from '@pages/main/suggest-sight/suggest-sight.component';
import {MapPopupCreateComponent} from '@components/map-popups/map-popup-create/map-popup-create.component';
import {MapPopupDetailComponent} from '@components/map-popups/map-popup-detail/map-popup-detail.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    SightsMapComponent,
    SightsListComponent,
    SightsInfoComponent,
    SuggestSightComponent,
    MapPopupCreateComponent,
    MapPopupDetailComponent,
  ],
  exports: [],
  providers: [],
})
export class MainModule {}
