import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sight} from '@store/models/sights.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, Observable, startWith} from 'rxjs';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
})
export class CreateSightComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      founder: new FormControl(null, [Validators.required]),
      date: new FormControl(),
      country: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      latitude: new FormControl(null, [Validators.required]),
      longitude: new FormControl(null, [Validators.required]),
      categories: new FormControl(),
    });
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) => fruit.toLowerCase().includes(filterValue));
  }

  submitForm() {
    if (this.form.invalid) return;

    const sight: Sight = {
      categories: [],
      coordinates: {
        latitude: 1,
        longitude: 1,
      },
      date: new Date(),
      description: '',
      founder: '',
      id: 0,
      images: [],
      location: {
        city: '',
        country: '',
        region: '',
      },
      mainImage: '',
      rating: 0,
      name: this.form.value.name,
    };
    return sight;
  }
}
