import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContextMenuActions, TableCol} from '@model/shared/table';
import {Select, Store} from '@ngxs/store';
import {SightsState} from '@store/states/sights.state';
import {Observable, Subscription} from 'rxjs';
import {Sight} from '@model/sight/sight';
import {GetSights} from '@store/actions/sights.actions';
import {sightsTableColumns} from '../../../constants/tableColumns';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  tableCols: TableCol[] = sightsTableColumns;

  total!: number;
  data: Sight[] = [];

  subscriptions: Subscription[] = [];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));
    this.subscriptions.push(
      this.sights$.subscribe((sights) => (this.data = sights)),
      this.total$.subscribe((total) => (this.total = total)),
    );
  }

  handleChangePage(value: number) {
    this.store.dispatch(new GetSights(10, value * 10));
  }

  contextMenuItems: ContextMenuActions[] = [
    {
      name: 'Просмотреть',
      action: (id: number) => {
        this.router.navigate(['sight', id]).then();
      },
    },
    {
      name: 'Редактировать',
      action: (id: number) => {
        this.router.navigate([`/admin/sights/edit`, id]).then();
      },
    },
    {
      name: 'Удалить',
      action: (id: number) => {
        console.log(id);
      },
    },
  ];
}
