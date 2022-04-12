import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Sight} from '@store/models/sights.model';
import {PaginatedList} from '@model/pagination';

@Injectable({
  providedIn: 'root',
})
export class SightService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getAllSights(): Observable<PaginatedList<Sight>> {
    return this.http.get<PaginatedList<Sight>>(`${this.prefix}sight`);
  }

  getSights(limit: number, offset: number): Observable<PaginatedList<Sight>> {
    return this.http.get<PaginatedList<Sight>>(
      `${this.prefix}sight?limit=${limit}&offset=${offset}`,
    );
  }

  getSight(id: number): Observable<Sight> {
    return this.http.get<Sight>(`${this.prefix}sight/${id}`);
  }
}
