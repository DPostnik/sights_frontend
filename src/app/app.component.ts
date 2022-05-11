import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {GetMeta} from '@store/actions/app.actions';
import {Initialize} from '@store/actions/account.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sights_frontend';
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(Initialize);
    this.store.dispatch(GetMeta);
  }
}
