import {Component, Input} from '@angular/core';
import {environment} from '@env/environment';
import {Tab} from '@model/shared/tab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() tabs!: Tab[];
  environment = environment;
}
