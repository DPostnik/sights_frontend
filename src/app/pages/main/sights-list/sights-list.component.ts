import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Select, Store} from '@ngxs/store';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import {GetSights} from '@store/actions/sights.actions';
import {SightsState} from '@store/states/sights.state';
import {Sight} from '@store/models/sights.model';
import {Router} from '@angular/router';
import {environment} from '@env/environment';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total?: number;
  currentPage?: number;
  data: Sight[] = [];

  search$ = new Subject<string>();

  subscriptions: Subscription[] = [];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new GetSights(10, 0));

    this.subscriptions.push(
      this.sights$.subscribe((sights) => (this.data = sights)),
      this.total$.subscribe((total) => (this.total = total)),
      this.search$
        .pipe(
          debounceTime(environment.debounce),
          distinctUntilChanged(),
          switchMap((value) => this.store.dispatch(new GetSights(10, 0, value))),
        )
        .subscribe(),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  handlePage($event: PageEvent) {
    this.store.dispatch(new GetSights(10, $event.pageIndex * 10));
  }

  onCardClick(sight: Sight) {
    this.router.navigate(['sight', sight.id]).then();
  }

  handleSearch(value: string) {
    this.search$.next(value);
  }
}
