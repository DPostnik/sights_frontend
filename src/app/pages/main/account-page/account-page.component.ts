import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "@model/user/user";
import {MatDialog} from "@angular/material/dialog";
import {UserEditModalComponent} from "@components/user-edit-modal/user-edit-modal.component";
import {Select} from "@ngxs/store";
import {AccountState} from "@store/states/account.state";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit, OnDestroy{

  @Select(AccountState.selectUser) user$!: Observable<User>;
  subscription!: Subscription;

  constructor(public dialog: MatDialog) {}

  user: Partial<User> = {};
  openUserEditModal(): void {
    this.dialog.open(UserEditModalComponent, {data: this.user})
  }

  ngOnInit(): void {
    this.subscription = this.user$.subscribe((user) => {
      this.user = {...user}
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
