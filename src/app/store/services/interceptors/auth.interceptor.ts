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

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log('server response');
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log('Unauthorized');
            }
          }
        },
      ),
    );
  }
}
