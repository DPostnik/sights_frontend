import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {Meta} from '@model/meta';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  prefix = environment.apiUrl;

  getMetaInformation(): Observable<Meta> {
    return this.http.get<Meta>(`${this.prefix}meta`);
  }
}
