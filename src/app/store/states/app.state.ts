import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {EndLoading, StartLoading} from '@store/actions/app.actions';
import {AppStateModel} from '@store/models/app.model';

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

  @Action(StartLoading)
  startLoading(ctx: StateContext<AppStateModel>) {
    ctx.patchState({isLoading: true});
  }

  @Action(EndLoading)
  endLoading(ctx: StateContext<AppStateModel>) {
    ctx.patchState({isLoading: false});
  }
}
