import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, IUser} from "../../../../auth.service";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  submitted = false;
  message: string = '';
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          // Validators.email
        ]
      ),
      password: new FormControl(null, [
        Validators.required,
        // Validators.minLength(6)
      ])
    });
  }

  submit(): void {
    if(this.form?.invalid)
    {
      return
    }
    this.submitted = true;

    const user: IUser = {
      email: this.form?.value.email,
      password: this.form?.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.submitted = false;
    })

  }

}
