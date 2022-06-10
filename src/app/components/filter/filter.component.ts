import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface FilterField {
  type: 'string' | 'boolean' | 'select';
  action: () => void;
  value: any;
  name: string;
  options?: {value: string; key: string}[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  fields: FilterField[] = [
    {
        type: 'string',
        action: () => {},
        value: '',
        name: 'country',
    },
    {
        type: 'select',
        action: () => {},
        value: '',
        name: 'category',
        options: [{value: 'da', key: 'da'}],
      },
  ];

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    const controls = this.fields.reduce(function (accumulator, item) {
      return {...accumulator, [item.name]: new FormControl(null)};
    },{});
    this.form = new FormGroup({...controls});
    console.log(this.form)
  }

  isText(type: 'string' | 'boolean' | 'select') {
    return type === 'string';
  }

  isSelect(type: 'string' | 'boolean' | 'select') {
    return type === 'select';
  }
}
