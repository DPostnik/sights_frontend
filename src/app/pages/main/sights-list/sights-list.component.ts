import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {GetTests} from '../../../store/actions/test.actions';

@Component({
    selector: 'app-sights-list',
    templateUrl: './sights-list.component.html',
    styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent {
    constructor(private store: Store) {}

    onClick() {
        this.store.dispatch(new GetTests(1000));
    }
}
