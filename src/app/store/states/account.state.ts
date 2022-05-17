import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AccountStateModel} from '@store/models/account.model';
import {Injectable} from '@angular/core';
import {AuthService} from '@store/services/auth.service';
import {initialUser} from '../../constants/user';
import {EndLoading, StartLoading} from '@store/actions/app.actions';
import {finalize, tap} from 'rxjs';
import {
  HandleHttpError,
  Initialize,
  Logout,
  RefreshToken,
  SignIn,
  SignInSuccess,
  UpdateAccountInfo,
} from '@store/actions/account.actions';
import {getDecodedAccessToken} from '@utils/jwtParse';
import {clearLocalStorage} from '@utils/localStorage';
import {AuthState} from '@model/enums/auth-state';

@State<AccountStateModel>({
  name: 'accountState',
  defaults: {
    user: {...initialUser},
    authState: AuthState.ANONYMOUS,
  },
})
@Injectable()
export class AccountState {
  constructor(private authService: AuthService) {}

  @Selector()
  static selectUser(state: AccountStateModel) {
    return state.user;
  }

  @Selector()
  static selectUserRole(state: AccountStateModel) {
    return state.user.role;
  }

  @Selector()
  static selectUserName(state: AccountStateModel) {
    return state.user.name;
  }

  @Selector()
  static selectAuthState(state: AccountStateModel) {
    return state.authState;
  }

  @Action(Initialize)
  initialize(ctx: StateContext<AccountStateModel>) {
    const accessToken = localStorage.getItem('access_token') || '';
    const refreshToken = localStorage.getItem('refresh_token') || '';
    if (accessToken && refreshToken) {
      ctx.dispatch(new SignInSuccess({accessToken, refreshToken}));
    }
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
    ctx.patchState({user: userInfo, authState: AuthState.LOGGED_IN});
  }

  @Action(Logout)
  logout(ctx: StateContext<AccountStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.patchState({user: {...initialUser}, authState: AuthState.ANONYMOUS});
        clearLocalStorage();
      }),
    );
  }

  @Action(RefreshToken)
  refreshToken(ctx: StateContext<AccountStateModel>) {
    ctx.patchState({authState: AuthState.ACCESS_TOKEN_EXPIRED});
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

  @Action(HandleHttpError)
  handleHttpError(ctx: StateContext<AccountStateModel>) {
    switch (ctx.getState().authState) {
      case AuthState.LOGGED_IN: {
        ctx.dispatch(RefreshToken);
        break;
      }
      case AuthState.ACCESS_TOKEN_EXPIRED: {
        // todo notifier
        ctx.dispatch(Logout);
        break;
      }
    }
  }

  @Action(UpdateAccountInfo)
  updateAccountInfo(ctx: StateContext<AccountStateModel>, {data}: UpdateAccountInfo) {
    ctx.patchState({user: {...ctx.getState().user, photoUrl: data.photoUrl, name: data.name}});
  }
}
