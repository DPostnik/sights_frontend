import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {PaginatedList} from '@model/pagination';
import {Sight} from '@model/sight';
import {SightDto} from '@model/dto/sightDto';

@Injectable({
  providedIn: 'root',
})
export class SightService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getSights(
    limit?: number,
    offset?: number,
    search: string = '',
  ): Observable<PaginatedList<Sight>> {
    const limitField = limit ? `?_limit=${limit}` : '';
    const offsetField = offset ? `&_offset=${offset}` : '';
    const searchField = search ? `&_search=${search}` : '';
    return this.http.get<PaginatedList<Sight>>(
      `${this.prefix}sight${limitField}${offsetField}${searchField}`,
    );
  }

  getSight(id: number): Observable<Sight> {
    return this.http.get<Sight>(`${this.prefix}sight/${id}`);
  }

  postSight(dto: SightDto): Observable<void> {
    return this.http.post<void>(`${this.prefix}sight`, dto);
  }
}
