import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {SharedModule} from '@shared/shared.module';
import {SigninPageComponent} from './signin-page/signin-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {path: 'signin', component: SigninPageComponent},
          {path: 'signup', component: SignupPageComponent},
          {path: '**', redirectTo: '/auth/signin'},
        ],
      },
    ]),
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [AuthLayoutComponent, SigninPageComponent, SignupPageComponent],
  providers: [],
})
export class AuthModule {}
