import {Component} from '@angular/core';
import {Tab} from '@model/tab';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  tabs: Tab[] = [
    {routerLink: 'dashboard', value: 'Главная'},
    {routerLink: 'create', value: 'Создание ОИЗ'},
    {routerLink: 'users', value: 'Пользователи'},
  ];
}
