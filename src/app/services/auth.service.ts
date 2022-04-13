import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

export interface IUser {
  email: string;
  password: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = `${environment.apiUrl}auth/`;

  constructor(private http: HttpClient) {}

  login(user: IUser): Observable<any> {
    return this.http.post(`${this.route}login`, user).pipe(tap(this.setToken));
  }

  register(user: CreateUserDto): Observable<any> {
    return this.http
      .post(`${this.route}registration`, user)
      .pipe(tap(this.setToken));
  }

  logout() {
    this.setToken(null);
  }

  private setToken(response: any | null): void {
    if (response) {
      localStorage.setItem('token', response.token);
    } else {
      localStorage.clear();
    }
  }
}
