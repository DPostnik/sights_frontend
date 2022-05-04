import {Action, State, StateContext} from '@ngxs/store';
import {AccountStateModel} from '@store/models/account.model';
import {Injectable} from '@angular/core';
import {AuthService} from '@store/services/auth.service';
import {initialAuthenticatedUser} from '../../constants/user';
import {LogIn, LogInSuccess} from '@store/actions/account.actions';
import {StartLoading} from '@store/actions/app.actions';

@State<AccountStateModel>({
  name: 'accountState',
  defaults: {
    ...initialAuthenticatedUser,
    isAuth: false,
  },
})
@Injectable()
export class AccountState {
  constructor(private authService: AuthService) {}

  @Action(LogIn)
  logIn(ctx: StateContext<AccountStateModel>, {credentials}: LogIn) {
    ctx.dispatch(StartLoading);
    return this.authService.login(credentials).pipe();
  }

  @Action(LogInSuccess)
  logInSuccess(ctx: StateContext<AccountStateModel>, {}: LogInSuccess) {
    ctx.patchState({});
  }
}
