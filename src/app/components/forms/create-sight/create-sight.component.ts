import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sight} from '@store/models/sights.model';
import {Observable, Subscription} from 'rxjs';
import {Country} from '@model/country';
import {Region} from '@model/region';
import {City} from '@model/city';
import {Category} from '@model/category';
import {Select} from '@ngxs/store';
import {AppState} from '@store/states/app.state';
import {Meta} from '@model/meta';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
})
export class CreateSightComponent implements OnInit, OnDestroy {
  @Select(AppState.selectMeta) meta$!: Observable<Meta>;
  // @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;
  form: FormGroup = new FormGroup({});
  // separatorKeysCodes: number[] = [ENTER, COMMA];

  subscriptions: Subscription[] = [];
  countries?: Country[];
  regions?: Region[];
  cities?: City[];
  categories!: Category[];

  ngOnInit(): void {
    this.subscriptions.push(
      this.meta$.subscribe((meta) => {
        this.countries = meta.countries;
        this.regions = meta.regions;
        this.cities = meta.cities;
        this.categories = meta.categories;
      }),
    );
    // const categoriesForm = this.form.get('categories');
    // if (categoriesForm) {
    //   this.subscriptions.push(
    //     categoriesForm.valueChanges
    //       .pipe(
    //         startWith(null),
    //         map((value: string | null) => {
    //           return value ? this.filteredCategories(value) : this.categories.map((item) => item.name);
    //         }),
    //       )
    //       .subscribe(value => this.filteredList = value),
    //   );
    // }
  }

  constructor() {
    this.initializeForm();
  }
  //
  // filteredCategories(value: string) {
  //   return this.categories
  //     .filter((item) => this.selectedCategories.includes(item.name))
  //     .filter((item) => item.name.includes(value))
  //     .map(item => item.name);
  // }

  private initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      founder: new FormControl(null),
      date: new FormControl(new Date()),
      country: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      latitude: new FormControl(null, [Validators.required]),
      longitude: new FormControl(null, [Validators.required]),
      categories: new FormControl(null),
    });
  }

  submitForm() {
    if (this.form.invalid) return;

    const sight: Sight = {
      categories: this.form.get('categories')?.value,
      coordinates: {
        latitude: this.form.get('latitude')?.value,
        longitude: this.form.get('longitude')?.value,
      },
      date: new Date(),
      description: this.form.get('description')?.value,
      founder: this.form.get('founder')?.value,
      id: 0,
      images: [],
      location: {
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        region: this.form.get('region')?.value,
      },
      mainImage: '',
      rating: 0,
      name: this.form.value.name,
    };
    console.log(sight);
    return sight;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  // onRemove(name: string) {
  //   this.selectedCategories = this.selectedCategories.filter((item) => item !== name);
  // }
  //
  // addCategory(event: MatChipInputEvent) {
  //   console.log(event);
  //   const value = (event.value || '').trim();
  //   if (value) {
  //     this.selectedCategories.push(value);
  //   }
  //   event.chipInput!.clear();
  // }
  //
  // selected(event: MatAutocompleteSelectedEvent) {
  //   const value = event.option.value;
  //   this.selectedCategories.push(value);
  //   this.filteredList = this.filteredCategories(value)
  //   this.categoryInput.nativeElement.value = '';
  // }
}
