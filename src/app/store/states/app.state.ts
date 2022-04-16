import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {
  EndLoading,
  GetMeta,
  GetMetaFailure,
  GetMetaSuccess,
  StartLoading,
} from '@store/actions/app.actions';
import {AppStateModel} from '@store/models/app.model';
import {AppService} from '@store/services/app.service';
import {catchError, EMPTY, switchMap, tap} from 'rxjs';
import {getMetaFromLocalStorage, setMetaLocalStorage} from '@utils/localStorage';

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    meta: undefined,
    isLoading: false,
  },
})
@Injectable()
export class AppState {
  constructor(private appService: AppService) {}

  @Selector()
  static selectIsLoading(state: AppStateModel) {
    return state.isLoading;
  }

  @Selector()
  static selectMeta(state: AppStateModel) {
    return state.meta;
  }

  @Action(StartLoading)
  startLoading(ctx: StateContext<AppStateModel>) {
    ctx.patchState({isLoading: true});
  }

  @Action(EndLoading)
  endLoading(ctx: StateContext<AppStateModel>) {
    ctx.patchState({isLoading: false});
  }

  @Action(GetMeta)
  getMeta(ctx: StateContext<AppStateModel>) {
    const metaFromLocalStorage = getMetaFromLocalStorage();
    return metaFromLocalStorage
      ? ctx.dispatch(new GetMetaSuccess(metaFromLocalStorage))
      : this.appService.getMetaInformation().pipe(
          tap((meta) => setMetaLocalStorage(meta)),
          switchMap((meta) => ctx.dispatch(new GetMetaSuccess(meta))),
          catchError((e) => {
            ctx.dispatch(GetMetaFailure);
            console.error('getMeta error', e);
            return EMPTY;
          }),
        );
  }

  @Action(GetMetaSuccess)
  GetMetaSuccess(ctx: StateContext<AppStateModel>, {meta}: GetMetaSuccess) {
    ctx.patchState({meta});
  }

  @Action(GetMetaFailure)
  GetMetaFailure(ctx: StateContext<AppStateModel>) {
    ctx.patchState({meta: undefined});
  }
}
