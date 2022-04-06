import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {SightModel} from '../models/test.model';
import {Observable} from 'rxjs';

export interface SightDto {
    data: SightModel[];
    total: number;
}

@Injectable({
    providedIn: 'root',
})
export class SightService {
    constructor(private http: HttpClient) {}
    prefix = environment.apiUrl;

    getSights(limit: number, offset: number): Observable<SightDto> {
        return this.http.get<SightDto>(
            `${this.prefix}sight?limit=${limit}&offset=${offset}`,
        );
    }
}
