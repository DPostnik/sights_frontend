import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AccountStateModel} from '@store/models/account.model';
import {Injectable} from '@angular/core';
import {AuthService} from '@store/services/auth.service';
import {initialUser} from '../../constants/user';
import {EndLoading, StartLoading} from '@store/actions/app.actions';
import {finalize, tap} from 'rxjs';
import {
  Initialize,
  Logout,
  RefreshToken,
  SignIn,
  SignInSuccess,
} from '@store/actions/account.actions';
import {getDecodedAccessToken} from '@utils/jwtParse';
import {clearLocalStorage} from '@utils/localStorage';

@State<AccountStateModel>({
  name: 'accountState',
  defaults: {
    user: {...initialUser},
    isAuth: false,
  },
})
@Injectable()
export class AccountState {
  constructor(private authService: AuthService) {}

  @Selector()
  static selectUserRole(state: AccountStateModel) {
    return state.user.role;
  }

  @Selector()
  static selectIsAuth(state: AccountStateModel) {
    return state.isAuth;
  }

  @Selector()
  static selectUserName(state: AccountStateModel) {
    return state.user.name;
  }

  @Action(SignIn)
  signIn(ctx: StateContext<AccountStateModel>, {credentials}: SignIn) {
    ctx.dispatch(StartLoading);
    return this.authService.signIn(credentials).pipe(
      tap((tokens) => {
        ctx.dispatch(new SignInSuccess(tokens));
      }),
      finalize(() => ctx.dispatch(EndLoading)),
    );
  }

  @Action(SignInSuccess)
  signInSuccess(ctx: StateContext<AccountStateModel>, {tokens}: SignInSuccess) {
    const {accessToken, refreshToken} = tokens;
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    const userInfo = getDecodedAccessToken(accessToken);
    ctx.patchState({isAuth: true, user: userInfo});
  }

  @Action(Logout)
  logout(ctx: StateContext<AccountStateModel>) {
    ctx.patchState({user: {...initialUser}, isAuth: false});
    clearLocalStorage();
    this.authService.logout();
  }

  @Action(Initialize)
  initialize(ctx: StateContext<AccountStateModel>) {
    const accessToken = localStorage.getItem('access_token') || '';
    const refreshToken = localStorage.getItem('refresh_token') || '';
    if (accessToken && refreshToken) {
      ctx.dispatch(new SignInSuccess({accessToken, refreshToken}));
    }
  }

  @Action(RefreshToken)
  refreshToken(ctx: StateContext<AccountStateModel>) {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      return this.authService.refreshToken(refreshToken).pipe(
        tap((tokens) => {
          ctx.dispatch(new SignInSuccess(tokens));
        }),
      );
    }
    return null;
  }
}
