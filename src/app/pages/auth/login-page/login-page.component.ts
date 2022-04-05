import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, IUser} from '../../../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    errorMessage: string = '';
    loginWindow: any = null;
    form: FormGroup = new FormGroup({});
    submitted = false;
    message: string = '';

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                // Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
                // Validators.minLength(6)
            ]),
        });
    }

    submit(): void {
        if (this.form?.invalid) {
            return;
        }
        this.submitted = true;

        const user: IUser = {
            email: this.form?.value.email,
            password: this.form?.value.password,
        };

        this.auth.login(user).subscribe((response) => {
            if (response.data) {
                this.form.reset();
            } else {
                this.errorMessage = response.message;
            }
            this.submitted = false;
        });
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
                if (href.includes('4200')) {
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
