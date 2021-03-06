import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {NgxsModule} from '@ngxs/store';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from '@pages/admin/admin.module';
import {AuthModule} from '@pages/auth/auth.module';
import {SharedModule} from '@shared/shared.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from '@pages/not-found/not-found.component';
import {environment} from '@env/environment';
import {MainModule} from '@pages/main/main.module';
import {SightsState} from '@store/states/sights.state';
import {SightService} from '@store/services/sight.service';
import {AppState} from '@store/states/app.state';
import {AppService} from '@store/services/app.service';
import {UsersState} from '@store/states/users.state';
import {UserService} from '@store/services/user.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '@store/services/interceptors/auth.interceptor';
import {AccountState} from '@store/states/account.state';
import {AuthService} from '@store/services/auth.service';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState, SightsState, UsersState, AccountState], {
      developmentMode: !environment.production,
    }),
    AdminModule,
    AuthModule,
    SharedModule,
    MainModule,
  ],
  providers: [
    SightService,
    AppService,
    UserService,
    AuthService,
    {provide: LOCALE_ID, useValue: 'ru'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
