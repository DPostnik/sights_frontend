import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {catchError, EMPTY, Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {HandleHttpError} from '@store/actions/account.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');

    const authReq = !req.headers.has('authorization')
      ? req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        })
      : req;

    return next.handle(authReq).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.store.dispatch(HandleHttpError);
            return new Observable<HttpEvent<any>>();
          }
        }
        return EMPTY;
      }),
    );
  }
}
