import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {AppState} from 'src/app/store/states/app.state';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Select(AppState.selectIsLoading) isLoading$!: Observable<boolean>;

  isLoading: boolean = false;

  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading),
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
