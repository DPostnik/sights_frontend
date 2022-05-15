import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {Country} from '@model/location/country';
import {Region} from '@model/location/region';
import {City} from '@model/location/city';
import {Category} from '@model/sight/category';
import {Select, Store} from '@ngxs/store';
import {AppState} from '@store/states/app.state';
import {Meta} from '@model/shared/meta';
import {CreateSight, GetSight, UpdateSight} from '@store/actions/sights.actions';
import {SightDto} from '@model/dto/sightDto';
import {SightsState} from '@store/states/sights.state';
import {Sight} from '@model/sight/sight';
import {ActivatedRoute} from '@angular/router';
import {Coordinates} from '@model/location/coordinates';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
})
export class CreateSightComponent implements OnInit, OnDestroy {
  @Input() update = false;
  @Select(AppState.selectMeta) meta$!: Observable<Meta>;
  @Select(SightsState.selectSight) sight$!: Observable<Sight>;
  @Select(SightsState.selectMarkerCoords) markerCoords$!: Observable<Coordinates>;

  form: FormGroup = new FormGroup({});
  sight?: Sight;
  markerCoords?: Coordinates;

  subscriptions: Subscription[] = [];
  countries?: Country[];
  regions?: Region[];
  cities?: City[];
  categories!: Category[];

  ngOnInit(): void {
    this.initializeForm();

    this.subscriptions.push(
      this.meta$.subscribe((meta) => {
        if (!meta) return;
        this.countries = meta.countries;
        this.regions = meta.regions;
        this.cities = meta.cities;
        this.categories = meta.categories;
      }),
    );
    this.subscriptions.push(
      this.route.params.subscribe((p) => p['id'] && this.store.dispatch(new GetSight(p['id']))),
      forkJoin([this.sight$, this.markerCoords$]).subscribe(([sight, markerCoords]) => {
        this.sight = sight;
        this.markerCoords = markerCoords;
        this.initializeForm();
      }),
      this.markerCoords$.subscribe((c) => {
        if (!c) return;
        this.form?.patchValue({
          longitude: c.longitude,
          latitude: c.latitude,
        });
      }),
    );
  }

  constructor(private store: Store, private route: ActivatedRoute) {}

  private initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.sight?.name || null, [Validators.required]),
      description: new FormControl(this.sight?.description || null, [Validators.required]),
      mainImage: new FormControl(this.sight?.mainImage || null),
      founder: new FormControl(this.sight?.founder || null),
      date: new FormControl(this.sight?.date || null),
      country: new FormControl(this.sight?.location?.country || null, [Validators.required]),
      region: new FormControl(this.sight?.location?.region || null, [Validators.required]),
      city: new FormControl(this.sight?.location?.city || null, [Validators.required]),
      latitude: new FormControl(
        (this.update ? this.sight?.coordinates?.latitude : this.markerCoords?.latitude) || null,
        [Validators.required],
      ),
      longitude: new FormControl(
        (this.update ? this.sight?.coordinates?.latitude : this.markerCoords?.longitude) || null,
        [Validators.required],
      ),
      categories: new FormControl(this.sight?.categories || null),
    });
  }

  submitForm(): void {
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
    if (this.update) {
      this.store.dispatch(new UpdateSight(sight, this.sight!.id));
      return;
    }
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
