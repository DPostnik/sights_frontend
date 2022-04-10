import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ISight} from '../models/sights.model';
import {PaginatedList} from '../../model/pagination';

@Injectable({
  providedIn: 'root',
})
export class SightService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getSights(limit: number, offset: number): Observable<PaginatedList<ISight>> {
    return this.http.get<PaginatedList<ISight>>(
      `${this.prefix}sight?limit=${limit}&offset=${offset}`,
    );
  }

  getSight(id: number): Observable<ISight> {
    return this.http.get<ISight>(`${this.prefix}sight/${id}`);
  }
}
