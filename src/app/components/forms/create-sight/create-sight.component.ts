import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sight} from '@store/models/sights.model';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
