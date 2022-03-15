import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TestService {
    getTests(delayTime: number): Observable<string[]> {
        const rngBool = Math.random() < 0.5;
        if (rngBool) {
            return of(['123', '223', '343']).pipe(delay(delayTime));
        }
        throw new Error('fail');
    }
}
