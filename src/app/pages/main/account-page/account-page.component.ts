import {Component} from '@angular/core';
import {User} from "@model/user/user";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {
  user: Partial<User> = {
    email: 'd.postnik1@gmail.com',
    gmail: 'd.postnik1@gmail.com',
    name: 'Daniil Postnik',
    role: 'ADMIN',
    photoUrl: '/assets/img/avatar.jpeg',
    favouriteSights: [],
  }
}
