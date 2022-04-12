import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {debounceTime, Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() changeSearch = new EventEmitter<string>();
  @Input() timeout: number = 600;
  searchReq = new Subject<string>();

  ngOnInit(): void {
    this.searchReq
      .pipe(debounceTime(+this.timeout))
      .subscribe((searchValue: string) => {
        this.changeSearch.emit(searchValue);
      });
  }

  ngOnDestroy(): void {
    this.searchReq.unsubscribe();
  }

  updateSearch(search: any) {
    this.searchReq.next(search.target.value);
  }
}
