import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: 'custom-button.component.html',
  styleUrls: ['custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input()
  disabled?: boolean;

  @Input()
  classNames?: string[];

  @Input()
  label?: string;

  @Input()
  optionTemplate?: TemplateRef<any>;

  @Output()
  clicked = new EventEmitter<any>();
}
