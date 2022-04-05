import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SightsStateModel} from '../models/test.model';
import {Injectable} from '@angular/core';
import {SightService} from '../services/sight.service';
import {switchMap, tap} from 'rxjs';
import {
    GetSights,
    GetSightsFailure,
    GetSightsSuccess,
} from '../actions/sights.actions';

@State<SightsStateModel>({
    name: 'sightsState',
    defaults: {
        isLoading: false,
        sights: [],
        total: 0,
    },
})
@Injectable()
export class SightsState {
    constructor(private sightService: SightService) {}

    @Selector()
    static selectSights(state: SightsStateModel) {
        return state.sights;
    }

    @Selector()
    static selectIsLoading(state: SightsStateModel) {
        return state.isLoading;
    }

    @Action(GetSights)
    getSights(ctx: StateContext<SightsStateModel>) {
        ctx.patchState({isLoading: true});
        try {
            return this.sightService.getSights(10, 0).pipe(
                tap((sights) =>
                    ctx.patchState({
                        sights: sights.data,
                        total: sights.total,
                    }),
                ),
                switchMap(() => ctx.dispatch(GetSightsSuccess)),
            );
        } catch (e) {
            ctx.dispatch(GetSightsFailure);
        } finally {
            ctx.patchState({isLoading: false});
        }
        return;
    }

    @Action(GetSightsFailure)
    getSightsFailure() {
        console.log('pizda');
    }
}
