import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {GetSights} from '../../../store/actions/sights.actions';
import {SightsState} from '../../../store/states/sights.state';
import {ISight} from '../../../store/models/sights.model';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent implements OnInit, OnDestroy {
  @ViewChild('table1', {static: false}) table?: MatTable<ISight>;

  @Select(SightsState.selectData) sights$!: Observable<ISight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total?: number;
  currentPage?: number;
  displayedColumns = ['city', 'founder', 'name', 'date', 'coordinates'];
  dataSource?: MatTableDataSource<ISight>;

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));

    this.subscriptions.push(
      this.sights$.subscribe((sights) => {
        this.dataSource = new MatTableDataSource<ISight>(sights);
      }),
      this.total$.subscribe((total) => (this.total = total)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  handlePage($event: PageEvent) {
    this.store.dispatch(new GetSights(10, $event.pageIndex * 10));
  }
}
