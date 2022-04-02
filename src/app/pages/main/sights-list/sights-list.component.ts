import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetTests} from '../../../store/actions/test.actions';
import {GetSights} from '../../../store/actions/sights.actions';
import {SightsState} from '../../../store/states/sights.state';
import {Observable, Subscription} from 'rxjs';
import {SightModel} from '../../../store/models/test.model';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-sights-list',
    templateUrl: './sights-list.component.html',
    styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    @Select(SightsState.selectSights) sights$?: Observable<SightModel[]>;
    sub?: Subscription;
    sights?: SightModel[];

    sightColumns = ['cityId', 'founder', 'name', 'date', 'coordinatesId'];

    constructor(private store: Store) {}

    onClick() {
        this.store.dispatch(new GetTests(1000));
    }

    ngOnInit(): void {
        this.sub = this.sights$?.subscribe((sights) => {
            this.sights = sights;
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

    onClick2() {
        this.store.dispatch(new GetSights(10, 0));
    }
}
