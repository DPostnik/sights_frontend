import {Component, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Logout} from '@store/actions/account.actions';
import {AccountState} from '@store/states/account.state';
import {AuthState} from '@model/enums/auth-state';
import {Roles} from "@enums/roles";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-account-nav-bar',
  templateUrl: './account-nav-bar.component.html',
  styleUrls: ['./account-nav-bar.component.scss'],
})
export class AccountNavBarComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Select(AccountState.selectAuthState) authState$!: Observable<AuthState>;
  @Select(AccountState.selectUserName) name$!: Observable<string>;
  @Select(AccountState.selectUserRole) role$!: Observable<string>;
  authState: AuthState = AuthState.ANONYMOUS;
  adminRole = Roles.ADMIN;

  constructor(private store: Store, private router: Router) {}

  signIn() {
    this.router.navigate(['auth/signin']).then();
  }

  signUp() {
    this.router.navigate(['auth/signup']).then();
  }

  logout() {
    this.store.dispatch(Logout);
    this.router.navigate(['/home']).then();
  }

  handleAccountClick() {
    this.router.navigate(['account']).then();
  }

  handleAdminClick() {
    this.router.navigate(['admin']).then();
  }
}
