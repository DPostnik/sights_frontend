import {AngularYandexMapsModule, YaConfig} from 'angular8-yandex-maps';
import {NgModule} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {HomeComponent} from './home/home.component';
import {SightsMapComponent} from './sights-map/sights-map.component';
import {SightsListComponent} from './sights-list/sights-list.component';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SharedModule} from '../../shared/shared.module';
import {SightsInfoComponent} from './sight-info/sights-info.component';
import {LoaderComponent} from '../../components/loader/loader.component';

const mapConfig: YaConfig = {
  apikey: environment.yaKey,
  lang: 'ru_RU',
};

@NgModule({
  imports: [AngularYandexMapsModule.forRoot(mapConfig), SharedModule],
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    SightsMapComponent,
    SightsListComponent,
    SightsInfoComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [],
  providers: [],
})
export class MainModule {}
