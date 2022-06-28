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
import {Router} from '@angular/router';
import {environment} from '@env/environment';
import {Sight} from '@model/sight/sight';
import {Rating} from '@model/sight/rating';
import {IFilter} from '@model/shared/filter';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss'],
})
export class SightsListComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectData) sights$!: Observable<Sight[]>;
  @Select(SightsState.selectTotal) total$!: Observable<number>;

  total?: number;
  data: Sight[] = [];

  search$ = new Subject<string>();

  subscriptions: Subscription[] = [];

  filterFields: IFilter[] = [
    {
      action: () => {},
      label: 'Страна',
      name: 'country',
      type: 'string',
      value: '',
    },
    {
      action: () => {},
      label: 'Категории',
      name: 'category',
      options: [{value: 'da', key: 'da'}],
      type: 'select',
      value: '',
    },
  ];

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

  getRatingCard(rating: number): Rating {
    return {
      filled: Array(rating).fill(1),
      notFilled: Array(5 - rating).fill(1),
    };
  }
}
