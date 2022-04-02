import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';

import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './pages/admin/admin.module';
import {AuthModule} from './pages/auth/auth.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AdminPageComponent} from './pages/admin/admin-page/admin-page.component';
import {environment} from '../environments/environment';
import {TestService} from './store/services/test.service';
import {TestState} from './store/states/test.state';
import {MainModule} from './pages/main/main.module';
import {SightsState} from './store/states/sights.state';
import {SightService} from './store/services/sight.service';

@NgModule({
    declarations: [AppComponent, AdminPageComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([TestState, SightsState], {
            developmentMode: !environment.production,
        }),
        AdminModule,
        AuthModule,
        SharedModule,
        MainModule,
    ],
    providers: [TestService, SightService],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
