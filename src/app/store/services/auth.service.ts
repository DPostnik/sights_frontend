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

  signIn(user: Credentials): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.route}signin`, user);
  }

  signUp(user: CreateUserDto): Observable<any> {
    return this.http.post<Tokens>(`${this.route}signup`, user);
  }

  logout() {
    return this.http.post(`${this.route}logout`, {});
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
