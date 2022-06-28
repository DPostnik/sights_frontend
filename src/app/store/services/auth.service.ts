import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {Credentials} from '@model/user/credentials';
import {CreateUserDto} from '@model/dto/userDto';
import {Tokens} from '@model/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = `${environment.apiUrl}auth/`;

  constructor(private http: HttpClient) {}

  signIn(credentials: Credentials): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.route}signin`, credentials);
  }

  signUp(user: CreateUserDto): Observable<any> {
    return this.http.post<Tokens>(`${this.route}signup`, user);
  }

  logout(refreshToken: string) {
    return this.http.post(
      `${this.route}logout`,
      {},
      {
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      },
    );
  }

  refreshToken(token: string): Observable<Tokens> {
    return this.http.post<Tokens>(
      `${this.route}refresh`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
  }
}
