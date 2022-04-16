import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {GetMeta} from '@store/actions/app.actions';

@Component({
  selector: 'app-dev-menu',
  templateUrl: './devMenu.component.html',
  styleUrls: ['./devMenu.component.scss'],
})
export class DevMenuComponent {
  constructor(private store: Store) {}

  handleClick(option: string) {
    switch (option) {
      case 'updateMeta':
        localStorage.removeItem('Meta');
        this.store.dispatch(GetMeta);
        break;
    }
  }
}
