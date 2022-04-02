import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {TestStateModel} from '../models/test.model';
import {TestService} from '../services/test.service';
import {
    GetTests,
    GetTestsFailure,
    GetTestsSuccess,
} from '../actions/test.actions';
import {catchError, finalize, of, switchMap, tap} from 'rxjs';

@State<TestStateModel>({
    name: 'teststate',
    defaults: {
        tests: [],
        isLoading: false,
    },
})
@Injectable()
export class TestState {
    constructor(private _testService: TestService) {}

    @Selector()
    static selectTests(state: TestStateModel) {
        return state.tests;
    }

    @Action(GetTests)
    getTests(ctx: StateContext<TestStateModel>, {delayTime}: GetTests) {
        ctx.patchState({isLoading: true});
        return of({}).pipe(
            switchMap(() =>
                this._testService.getTests(delayTime).pipe(
                    tap((tests) => ctx.patchState({tests})),
                    switchMap(() => ctx.dispatch(GetTestsSuccess)),
                ),
            ),
            catchError(() => ctx.dispatch(GetTestsFailure)),
            finalize(() => ctx.patchState({isLoading: false})),
        );
    }

    @Action(GetTestsSuccess)
    getTestsSuccess() {
        alert('success');
    }

    @Action(GetTestsFailure)
    getTestsFailure(ctx: StateContext<TestStateModel>) {
        ctx.patchState({tests: []});
        alert('fail');
    }
}
