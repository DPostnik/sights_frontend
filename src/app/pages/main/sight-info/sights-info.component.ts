import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {GetSight} from '../../../store/actions/sights.actions';
import {SightsState} from '../../../store/states/sights.state';
import {ISight} from '../../../store/models/sights.model';

@Component({
  selector: 'app-sights-info',
  templateUrl: './sights-info.component.html',
  styleUrls: ['./sights-info.component.scss'],
})
export class SightsInfoComponent implements OnInit, OnDestroy {
  @Select(SightsState.selectSight) sight$!: Observable<ISight>;

  sight?: ISight;

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((p) =>
        this.store.dispatch(new GetSight(p['id'])),
      ),
      this.sight$.subscribe((sight) => (this.sight = sight)),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  handleReturnClick() {
    this.location.back();
  }
}