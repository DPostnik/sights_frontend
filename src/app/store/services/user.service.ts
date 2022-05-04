import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {PaginatedList} from '@model/shared/pagination';
import {User} from '@model/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getUsers(limit?: number, offset?: number, search: string = ''): Observable<PaginatedList<User>> {
    const limitField = limit ? `?_limit=${limit}` : '';
    const offsetField = offset ? `&_offset=${offset}` : '';
    const searchField = search ? `&_search=${search}` : '';
    return this.http.get<PaginatedList<User>>(
      `${this.prefix}users${limitField}${offsetField}${searchField}`,
    );
  }
}
