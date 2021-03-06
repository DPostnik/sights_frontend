import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {catchError, EMPTY, finalize, switchMap, tap} from 'rxjs';
import {SightService} from '@store/services/sight.service';
import {
  CreateSight,
  GetSight,
  GetSightFailure,
  GetSights,
  GetSightsFailure,
  GetSightsSuccess,
  GetSightSuccess,
  SetMarkerCoords,
  UpdateSight,
} from '@store/actions/sights.actions';
import {SightsStateModel} from '@store/models/sights.model';
import {EndLoading, StartLoading} from '@store/actions/app.actions';

@State<SightsStateModel>({
  name: 'sightsState',
  defaults: {
    data: [],
    total: 0,
    selectedSight: undefined,
    markerCoords: undefined,
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
  static selectSight(state: SightsStateModel) {
    return state.selectedSight;
  }

  @Selector()
  static selectMarkerCoords(state: SightsStateModel) {
    return state.markerCoords;
  }

  @Selector()
  static selectTotal(state: SightsStateModel) {
    return state.total;
  }

  @Action(GetSights)
  getSights(ctx: StateContext<SightsStateModel>, {limit, offset, search}: GetSights) {
    ctx.dispatch(StartLoading);
    return this.sightService.getSights(limit, offset, search).pipe(
      switchMap((sights) => ctx.dispatch(new GetSightsSuccess(sights))),
      finalize(() => ctx.dispatch(EndLoading)),
      catchError((e) => {
        ctx.dispatch(GetSightsFailure);
        console.error('getSights error', e); // todo notifier
        return EMPTY;
      }),
    );
  }

  @Action(GetSightsSuccess)
  getSightsSuccess(ctx: StateContext<SightsStateModel>, {sights}: GetSightsSuccess) {
    ctx.patchState({
      data: sights.data,
      total: sights.total,
    });
  }

  @Action(GetSightsFailure)
  getSightsFailure(ctx: StateContext<SightsStateModel>) {
    ctx.patchState({data: [], total: 0});
  }

  @Action(SetMarkerCoords)
  setMarkerCoords(ctx: StateContext<SightsStateModel>, {coordinates}: SetMarkerCoords) {
    ctx.patchState({markerCoords: coordinates});
  }

  @Action(GetSight)
  getSight(ctx: StateContext<SightsStateModel>, {id}: GetSight) {
    ctx.dispatch(StartLoading);
    return this.sightService.getSight(id).pipe(
      switchMap((sight) => ctx.dispatch(new GetSightSuccess(sight))),
      finalize(() => ctx.dispatch(EndLoading)),
      catchError((e) => {
        ctx.dispatch(GetSightFailure);
        console.error('getSight error', e); // todo notifier
        return EMPTY;
      }),
    );
  }

  @Action(GetSightSuccess)
  getSightSuccess(ctx: StateContext<SightsStateModel>, {sight}: GetSightSuccess) {
    ctx.patchState({
      selectedSight: sight,
    });
  }

  @Action(GetSightFailure)
  getSightFailure(ctx: StateContext<SightsStateModel>) {
    ctx.patchState({selectedSight: undefined});
  }

  @Action(CreateSight)
  createSight(ctx: StateContext<SightsStateModel>, {dto}: CreateSight) {
    return this.sightService.postSight(dto).pipe(
      tap(() => ctx.patchState({selectedSight: undefined})),
      catchError((e) => {
        console.error('getSight error', e);
        return EMPTY;
      }),
    );
  }

  @Action(UpdateSight)
  updateSight(ctx: StateContext<SightsStateModel>, {sight, id}: UpdateSight) {
    return this.sightService.putSight(sight, id).pipe(
      tap(() => ctx.patchState({selectedSight: undefined})),
      catchError((e) => {
        console.error('getSight error', e);
        return EMPTY;
      }),
    );
  }
}
