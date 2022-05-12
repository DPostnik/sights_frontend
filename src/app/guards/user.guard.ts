import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {AccountState} from '@store/states/account.state';
import {Injectable} from '@angular/core';
import {AuthState} from '@enums/auth-state';

@Injectable()
export class UserGuard implements CanActivate {
  @Select(AccountState.selectAuthState) authState$!: Observable<AuthState>;
  authState?: AuthState;

  constructor(private router: Router) {
    this.authState$.subscribe((authState) => {
      this.authState = authState;
    });
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authState === AuthState.ANONYMOUS) {
      return this.router.parseUrl('/auth');
    }
    return true;
  }
}
