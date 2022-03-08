import {Component, OnInit} from '@angular/core';
import {getDecodedAccessToken} from "../../utils/jwtParse";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName = 'Account';

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    const token = getDecodedAccessToken();
    if (token) {
      this.userName = token.name || 'Account';
    }
  }

  logout(): void {
    this.auth.logout();
    this.userName = 'Account'
  }

}
