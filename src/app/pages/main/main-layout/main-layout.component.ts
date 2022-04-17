import {Component} from '@angular/core';
import {Tab} from '@model/tab';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  tabs: Tab[] = [
    {routerLink: 'home', value: 'Главная'},
    {routerLink: 'map', value: 'Карта'},
    {routerLink: 'list', value: 'Список объектов'},
  ];
}
