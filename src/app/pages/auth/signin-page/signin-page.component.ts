import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@store/services/auth.service';
import {Credentials} from '@model/user/credentials';
import {Select, Store} from '@ngxs/store';
import {SignIn} from '@store/actions/account.actions';
import {Router} from '@angular/router';
import {AccountState} from '@store/states/account.state';
import {Observable} from 'rxjs';
import {AuthState} from '@model/enums/auth-state';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  errorMessage: string = '';
  form: FormGroup = new FormGroup({});
  submitted = false;
  message: string = '';
  @Select(AccountState.selectAuthState) authState$!: Observable<AuthState>;

  constructor(private auth: AuthService, private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        // Validators.minLength(6)
      ]),
    });
    this.authState$.subscribe((authState$) => {
      return authState$ === AuthState.LOGGED_IN && this.router.navigate(['/']);
    });
  }

  submit(): void {
    if (this.form?.invalid) {
      return;
    }
    this.submitted = true;

    const credentials: Credentials = {
      email: this.form?.value.email,
      password: this.form?.value.password,
    };

    this.store.dispatch(new SignIn(credentials));
  }

  redirect(): void {
    let href = '';
    const ref = window.open(
      'http://localhost:3000/auth/login',
      '',
      'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no',
    );
    const interval = setInterval(() => {
      if (ref) {
        href = ref.location.href;
        if (href?.includes('4200')) {
          ref.close();
          clearInterval(interval);
          window.location.href = href;
        }
      }
    }, 500);
  }

  resetErrorMessage() {
    this.errorMessage = '';
  }
}
