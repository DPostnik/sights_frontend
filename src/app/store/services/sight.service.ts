import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SightModel} from '../models/test.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SightService {
    constructor(private http: HttpClient) {}
    prefix = environment.apiUrl;

    getSights(limit: number, offset: number): Observable<SightModel[]> {
        return this.http.get<SightModel[]>(
            `${this.prefix}sight?_limit=${limit}&_offset=${offset}`,
        );
    }
}
