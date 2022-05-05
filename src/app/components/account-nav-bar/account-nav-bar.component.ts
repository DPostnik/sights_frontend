import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Logout} from '@store/actions/account.actions';
import {AccountState} from '@store/states/account.state';

@Component({
  selector: 'app-account-nav-bar',
  templateUrl: './account-nav-bar.component.html',
  styleUrls: ['./account-nav-bar.component.scss'],
})
export class AccountNavBarComponent {
  constructor(private store: Store, private router: Router) {}
  @Select(AccountState.selectIsAuth) isAuth$!: Observable<boolean>;
  @Select(AccountState.selectUserName) name$!: Observable<string>;
  subscriptions: Subscription[] = [];

  signIn() {
    this.router.navigate(['auth/signin']).then();
  }

  signUp() {
    this.router.navigate(['auth/signup']).then();
  }

  logout() {
    this.store.dispatch(Logout);
  }
}
