import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {CommonModule} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegisterPageComponent},
        ]
      }
    ]),
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  providers: []
})

export class AuthModule {
}
