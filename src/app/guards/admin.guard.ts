import {CanActivate, Router, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {AccountState} from '@store/states/account.state';
import {Injectable} from '@angular/core';
import {Roles} from '@enums/roles';
import {AuthState} from '@enums/auth-state';

@Injectable()
export class AdminGuard implements CanActivate {
  @Select(AccountState.selectUserRole) role$!: Observable<string>;
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
    return this.role$.pipe(
      map((role) => {
        if (role === Roles.ADMIN) {
          return true;
        }
        return this.router.parseUrl('/not-found');
      }),
    );
  }
}
