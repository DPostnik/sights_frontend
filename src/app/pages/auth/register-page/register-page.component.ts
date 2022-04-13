import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, CreateUserDto} from '@services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  submitted = false;

  message: string = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let name = '',
      email = '';
    this.route.queryParams.subscribe((params) => {
      if (params) {
        name = params['name'];
        email = params['email'];
      }
    });
    this.form = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      name: new FormControl(name, [Validators.required]),
    });
  }

  submit(): void {
    if (this.form?.invalid) {
      return;
    }
    this.submitted = true;

    const user: CreateUserDto = {
      email: this.form?.value.email,
      password: this.form?.value.password,
      name: this.form?.value.name,
    };

    this.auth.register(user).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/']);
    });
  }
}
