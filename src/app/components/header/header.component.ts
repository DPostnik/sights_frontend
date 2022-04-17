import {Component, Input, OnInit} from '@angular/core';
import {getDecodedAccessToken} from '@utils/jwtParse';
import {AuthService} from '@services/auth.service';
import {environment} from '@env/environment';
import {Tab} from '@model/tab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() tabs!: Tab[];
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
}
