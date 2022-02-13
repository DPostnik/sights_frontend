import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: AuthLayoutComponent, children: [
        {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'register', component: RegisterPageComponent},
      ]
    }
  ])],
  exports: [RouterModule],
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
})

export class AuthModule {
}
