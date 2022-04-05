import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetTests} from '../../../store/actions/test.actions';
import {GetSights} from '../../../store/actions/sights.actions';
import {SightsState} from '../../../store/states/sights.state';
import {Observable, Subscription} from 'rxjs';
import {SightModel} from '../../../store/models/test.model';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-sights-list',
    templateUrl: './sights-list.component.html',
    styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent implements OnInit, OnDestroy {
    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    @ViewChild('table1', {static: false}) table?: MatTable<SightModel>;

    @Select(SightsState.selectSights) sights$?: Observable<SightModel[]>;
    sub?: Subscription;

    displayedColumns = ['city', 'founder', 'name', 'date', 'coordinates'];
    dataSource?: MatTableDataSource<SightModel>;

    constructor(private store: Store) {}

    onClick() {
        this.store.dispatch(new GetTests(1000));
    }

    ngOnInit(): void {
        this.store.dispatch(new GetSights(10, 0));
        this.sub = this.sights$?.subscribe((sights) => {
            this.dataSource = new MatTableDataSource<SightModel>(sights);
            console.log(sights);
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
