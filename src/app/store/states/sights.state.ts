import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {catchError, EMPTY, finalize, switchMap, tap} from 'rxjs';
import {SightService} from '../services/sight.service';
import {
  GetSights,
  GetSightsFailure,
  GetSightsSuccess,
} from '../actions/sights.actions';
import {SightsStateModel} from '../models/sights.model';
import {SetLoading} from '../actions/app.actions';

@State<SightsStateModel>({
  name: 'sightsState',
  defaults: {
    data: [],
    total: 0,
  },
})
@Injectable()
export class SightsState {
  constructor(private sightService: SightService) {}

  @Selector()
  static selectData(state: SightsStateModel) {
    return state.data;
  }

  @Selector()
  static selectTotal(state: SightsStateModel) {
    return state.total;
  }

  @Action(GetSights)
  getSights(ctx: StateContext<SightsStateModel>, {limit, offset}: GetSights) {
    ctx.dispatch(new SetLoading(true));
    return this.sightService.getSights(limit, offset).pipe(
      tap(() => ctx.dispatch(new SetLoading(true))),
      tap((sights) =>
        ctx.patchState({
          data: sights.data,
          total: sights.total,
        }),
      ),
      switchMap(() => ctx.dispatch(GetSightsSuccess)),
      finalize(() => ctx.dispatch(new SetLoading(false))),
      catchError((e) => {
        ctx.dispatch(GetSightsFailure);
        console.error(e);
        return EMPTY;
      }),
    );
  }

  @Action(GetSightsFailure)
  getSightsFailure(ctx: StateContext<SightsStateModel>) {
    ctx.patchState({data: [], total: 0});
  }
}
