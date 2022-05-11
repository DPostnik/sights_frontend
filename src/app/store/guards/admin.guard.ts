import {CanActivate, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {AccountState} from '@store/states/account.state';
import {Injectable} from '@angular/core';
import {Roles} from '@enums//roles';

@Injectable()
export class AdminGuard implements CanActivate {
  @Select(AccountState.selectUserRole) role$!: Observable<string>;

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.role$.pipe(map((role) => role === Roles.ADMIN));
  }
}
