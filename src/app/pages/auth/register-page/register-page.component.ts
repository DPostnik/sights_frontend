import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, CreateUserDto} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  submitted = false;
  message: string = '';

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
        ]
      ),
      password: new FormControl(null, [
        Validators.required,
      ]),
      name: new FormControl(null, [
        Validators.required,
      ])
    });
  }

  submit(): void {
    if (this.form?.invalid) {
      return
    }
    this.submitted = true;

    const user: CreateUserDto = {
      email: this.form?.value.email,
      password: this.form?.value.password,
      name: this.form?.value.name
    };

    this.auth.register(user).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/']);
    })

  }
}
