import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgxsModule} from '@ngxs/store';

import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './pages/admin/admin.module';
import {AuthModule} from './pages/auth/auth.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AdminPageComponent} from './pages/admin/admin-page/admin-page.component';
import {MainLayoutComponent} from './pages/main/main-layout/main-layout.component';
import {HomeComponent} from './pages/main/home/home.component';
import {SightsMapComponent} from './pages/main/sights-map/sights-map.component';
import {SightsListComponent} from './pages/main/sights-list/sights-list.component';
import {FooterComponent} from './components/footer/footer.component';
import {environment} from '../environments/environment';
import {TestService} from './store/services/test.service';
import {TestState} from './store/states/test.state';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AdminPageComponent,
        NotFoundComponent,
        MainLayoutComponent,
        HomeComponent,
        SightsMapComponent,
        SightsListComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([TestState], {
            developmentMode: !environment.production,
        }),
        MatToolbarModule,
        MatIconModule,
        AdminModule,
        AuthModule,
        SharedModule,
    ],
    providers: [TestService],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
