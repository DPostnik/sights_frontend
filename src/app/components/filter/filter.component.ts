import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IFilter} from '@model/shared/filter';

@Component({
  selector: 'app-filter [fields]',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input()
  fields!: IFilter[];

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    const controls = this.fields.reduce(function (accumulator, item) {
      return {...accumulator, [item.name]: new FormControl(null)};
    }, {});
    this.form = new FormGroup({...controls});
  }

  onSubmit() {}

  clear() {}
}
