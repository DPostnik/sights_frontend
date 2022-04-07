import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {SetLoading} from '../actions/app.actions';
import {AppStateModel} from '../models/app.model';

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    isLoading: false,
  },
})
@Injectable()
export class AppState {
  @Selector()
  static selectIsLoading(state: AppStateModel) {
    return state.isLoading;
  }

  @Action(SetLoading)
  setLoading(ctx: StateContext<AppStateModel>, {isLoading}: SetLoading) {
    ctx.patchState({isLoading});
  }
}
