import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Store} from '@ngxs/store';
import {RefreshToken} from '@store/actions/account.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private counter = 0;
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');

    const authReq = !req.headers.has('authorization')
      ? req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        })
      : req;

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.counter = 0;
            console.log('server response');
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (this.counter !== 1) {
              this.counter++;
              if (err.status === 401) {
                this.store.dispatch(RefreshToken);
                console.log('Unauthorized');
              }
            }
          }
        },
      ),
    );
  }
}
