import {Component, OnInit} from '@angular/core';
import {ContextMenuActions, TableCol} from '@model/table';
import {Select, Store} from '@ngxs/store';
import {SightsState} from '@store/states/sights.state';
import {Observable, Subscription} from 'rxjs';
import {Sight} from '@model/sight';
import {GetSights} from '@store/actions/sights.actions';
import {sightsTableColumns} from '../../../constants/tableColumns';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total!: number;
  data: Sight[] = [];
  contextMenuItems: ContextMenuActions = {
    onEdit: this.edit,
    onRemove: this.remove,
    onView: this.view,
  };

  subscriptions: Subscription[] = [];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));

    this.subscriptions.push(
      this.sights$.subscribe((sights) => (this.data = sights)),
      this.total$.subscribe((total) => (this.total = total)),
    );
  }

  tableCols: TableCol[] = sightsTableColumns;

  handleChangePage(value: number) {
    this.store.dispatch(new GetSights(10, value * 10));
  }

  async edit(id: number) {
    await this.router.navigate(['sight', id]);
  }

  remove(id: number) {
    console.log(id);
  }

  async view(id: number) {
    await this.router.navigate([`/admin/edit`, id]);
  }
}
