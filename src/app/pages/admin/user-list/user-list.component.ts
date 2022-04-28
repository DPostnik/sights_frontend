import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {UsersState} from '@store/states/users.state';
import {Observable, Subscription} from 'rxjs';
import {User} from '@model/user';
import {GetUsers} from '@store/actions/user.actions';
import {TableCol} from '@model/table';
import {userTableColumns} from '../../../constants/tableColumns';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Select(UsersState.selectData) users$!: Observable<User[]>;
  @Select(UsersState.selectTotal) total$!: Observable<number>;

  total: number = 0;
  data: User[] = [];

  subscriptions: Subscription[] = [];
  tableCols: TableCol[] = userTableColumns;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsers(10, 0));

    this.subscriptions.push(
      this.users$.subscribe((users) => (this.data = users)),
      this.total$.subscribe((total) => (this.total = total)),
    );
  }

  handleChangePage(value: number) {
    this.store.dispatch(new GetUsers(10, value * 10));
  }
}
