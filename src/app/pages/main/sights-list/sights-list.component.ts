import {Component, OnDestroy, OnInit} from '@angular/core';
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
  @Select(SightsState.selectData) sights$!: Observable<ISight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total?: number;
  currentPage?: number;
  data: ISight[] = [];

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));

    this.subscriptions.push(
      this.sights$.subscribe((sights) => (this.data = sights)),
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
