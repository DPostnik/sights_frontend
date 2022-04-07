import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SightsStateModel} from '../models/sights.model';

@Injectable({
  providedIn: 'root',
})
export class SightService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getSights(limit: number, offset: number): Observable<SightsStateModel> {
    return this.http.get<SightsStateModel>(
      `${this.prefix}sight?limit=${limit}&offset=${offset}`,
    );
  }
}
