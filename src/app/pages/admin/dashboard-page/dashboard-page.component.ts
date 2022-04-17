import {Component, OnInit} from '@angular/core';
import {TableCol} from '@model/table';
import {Select, Store} from '@ngxs/store';
import {SightsState} from '@store/states/sights.state';
import {Observable, Subscription} from 'rxjs';
import {Sight} from '@model/sight';
import {GetSights} from '@store/actions/sights.actions';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total!: number;
  currentPage?: number;
  data: Sight[] = [];

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));

    this.subscriptions.push(
      this.sights$.subscribe((sights) => (this.data = sights)),
      this.total$.subscribe((total) => (this.total = total)),
    );
  }

  tableCols: TableCol[] = [
    {
      def: 'id',
      title: 'ID',
      field: 'id',
    },
    {
      def: 'founder',
      title: 'Основатель',
      field: 'founder',
    },
    {
      def: 'name',
      title: 'Название',
      field: 'name',
    },
    {
      def: 'description',
      title: 'Описание',
      field: 'description',
    },
  ];

  handleChangePage(value: number) {
    this.store.dispatch(new GetSights(10, value * 10));
  }
}
