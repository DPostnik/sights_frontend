import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription, tap} from 'rxjs';
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
import {ActivatedRoute, Router} from '@angular/router';
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

  selectedCountryId: number = 0;
  selectedRegionId: number = 0;
  selectedCityId: number = 0;
  selectedRegion: any;
  selectedCity: any;

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
      this.sight$.pipe(tap((sight) => (this.sight = sight))).subscribe(() => {
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

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

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
      city: this.form.get('city')?.value.name,
      name: this.form.get('name')?.value,
      mainImage: this.form.get('mainImage')?.value,
    };
    if (this.update)
      this.store.dispatch(new UpdateSight(sight, this.sight!.id))
    else this.store.dispatch(new CreateSight(sight));
    this.router.navigate(['admin/sights/dashboard']).then();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  selectRegion(value: Region) {
    this.selectedRegionId = value.id;
    this.selectedCountryId = value.countryId;
    this.selectedRegion = value;
  }

  selectCity(value: any) {
    this.selectedCityId = value.id;
    this.selectedRegionId = value.regionId;
    this.selectedCity = value;
    this.selectedRegion = this.regions?.find((item) => {
      return item.id === value.regionId;
    });
  }
}
