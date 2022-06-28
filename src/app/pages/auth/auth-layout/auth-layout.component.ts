import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  index: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.index = +this.router.url.includes('signup');
  }

  navigate(event: MatTabChangeEvent) {
    this.router.navigate(['auth', event.index ? 'signup' : 'signin']).then();
  }

  goHome() {
    this.router.navigate(['/']).then();
  }
}
