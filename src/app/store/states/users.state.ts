import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UsersStateModel} from '@store/models/users.model';
import {GetUsers, GetUsersFailure, GetUsersSuccess} from '@store/actions/user.actions';
import {UserService} from '@store/services/user.service';
import {EndLoading, StartLoading} from '@store/actions/app.actions';
import {catchError, EMPTY, finalize, switchMap} from 'rxjs';

@State<UsersStateModel>({
  name: 'usersState',
  defaults: {
    data: [],
    total: 0,
    selectedUser: undefined,
  },
})
@Injectable()
export class UsersState {
  constructor(private userService: UserService) {}

  @Selector()
  static selectData(state: UsersStateModel) {
    return state.data;
  }

  @Selector()
  static selectTotal(state: UsersStateModel) {
    return state.total;
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<UsersStateModel>, {limit, offset, search}: GetUsers) {
    ctx.dispatch(StartLoading);
    return this.userService.getUsers(limit, offset, search).pipe(
      switchMap((users) => ctx.dispatch(new GetUsersSuccess(users))),
      finalize(() => ctx.dispatch(EndLoading)),
      catchError((e) => {
        ctx.dispatch(GetUsersFailure);
        console.error('getUsers error', e);
        return EMPTY;
      }),
    );
  }

  @Action(GetUsersSuccess)
  getUsersSuccess(ctx: StateContext<UsersStateModel>, {users}: GetUsersSuccess) {
    ctx.patchState({
      data: users.data,
      total: users.total,
    });
  }

  @Action(GetUsersFailure)
  getUsersFailure(ctx: StateContext<UsersStateModel>) {
    ctx.patchState({
      data: [],
      total: 0,
    });
  }
}
