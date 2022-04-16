import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sight} from '@store/models/sights.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, Observable, startWith, Subscription} from 'rxjs';
import {Country} from '@model/country';
import {Region} from '@model/region';
import {City} from '@model/city';
import {Category} from '@model/category';
import {Select} from '@ngxs/store';
import {AppState} from '@store/states/app.state';
import {Meta} from '@model/meta';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
})
export class CreateSightComponent implements OnInit, OnDestroy {
  @Select(AppState.selectMeta) meta$!: Observable<Meta>;
  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;
  form: FormGroup = new FormGroup({});
  separatorKeysCodes: number[] = [ENTER, COMMA];

  subscriptions: Subscription[] = [];
  countries?: Country[];
  regions?: Region[];
  cities?: City[];
  categories!: Category[];

  selectedCategories: string[] = [];
  filteredCategories?: any;

  ngOnInit(): void {
    this.subscriptions.push(
      this.meta$.subscribe((meta) => {
        this.countries = meta.countries;
        this.regions = meta.regions;
        this.cities = meta.cities;
        this.categories = meta.categories;
      }),
    );
    const categoriesForm = this.form.get('categories');
    if (categoriesForm) {
      this.subscriptions.push(
        categoriesForm.valueChanges
          .pipe(
            startWith(null),
            map((value: string | null) => {
              return value ? this._filter(value) : this.categories.map((item) => item.name);
            }),
          )
          .subscribe(),
      );
    }
  }

  constructor() {
    this.initializeForm();
  }

  private initializeForm(): void {
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onRemove(name: string) {
    this.selectedCategories = this.selectedCategories.filter((item) => item !== name);
  }

  addCategory(event: MatChipInputEvent) {
    console.log(event);
    const value = (event.value || '').trim();
    if (value) {
      console.log(value);
    }
    event.chipInput!.clear();
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.selectedCategories.push(event.option.value);
    this.categoryInput.nativeElement.value = '';
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.categories.filter((item) => item.name.toLowerCase().includes(filterValue));
  }
}
