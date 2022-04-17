import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Country} from '@model/country';
import {Region} from '@model/region';
import {City} from '@model/city';
import {Category} from '@model/category';
import {Select, Store} from '@ngxs/store';
import {AppState} from '@store/states/app.state';
import {Meta} from '@model/meta';
import {CreateSight} from '@store/actions/sights.actions';
import {SightDto} from '@model/dto/sightDto';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
})
export class CreateSightComponent implements OnInit, OnDestroy {
  @Select(AppState.selectMeta) meta$!: Observable<Meta>;
  form: FormGroup = new FormGroup({});

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
  }

  constructor(private store: Store) {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      mainImage: new FormControl(null),
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

    const sight: SightDto = {
      categories: [this.form.get('categories')?.value],
      coordinates: {
        latitude: this.form.get('latitude')?.value,
        longitude: this.form.get('longitude')?.value,
      },
      date: new Date(),
      description: this.form.get('description')?.value,
      founder: this.form.get('founder')?.value,
      city: this.form.get('city')?.value,
      name: this.form.get('name')?.value,
      mainImage: this.form.get('mainImage')?.value,
    };
    this.store.dispatch(new CreateSight(sight));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  // @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  //
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
  //
  // filteredCategories(value: string) {
  //   return this.categories
  //     .filter((item) => this.selectedCategories.includes(item.name))
  //     .filter((item) => item.name.includes(value))
  //     .map(item => item.name);
  // }
  //
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
