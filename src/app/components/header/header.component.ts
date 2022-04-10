import {Component, OnInit} from '@angular/core';
import {getDecodedAccessToken} from '../../utils/jwtParse';
import {AuthService} from '../../services/auth.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName = 'Account';
  environment = environment;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const token = getDecodedAccessToken();
    this.userName = token?.name || 'Account';
  }

  logout(): void {
    this.auth.logout();
    this.userName = 'Account';
  }

  handleDevMenuClick(option: string) {
    switch (option) {
      case 'test1':
        console.log('test1 -> ');
        break;
      case 'test2':
        console.log('test2 -> ');
        break;
    }
  }
}
