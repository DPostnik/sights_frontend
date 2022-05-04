import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {Credentials} from '@model/user/credentials';
import {CreateUserDto} from "@model/dto/userDto";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = `${environment.apiUrl}auth/`;

  constructor(private http: HttpClient) {}

  login(user: Credentials): Observable<any> {
    return this.http.post(`${this.route}login`, user).pipe(tap(AuthService.setToken));
  }

  register(user: CreateUserDto): Observable<any> {
    return this.http.post(`${this.route}registration`, user).pipe(tap(AuthService.setToken));
  }

  logout() {
    AuthService.setToken(null);
  }

  private static setToken(response: any | null): void {
    if (response) {
      localStorage.setItem('token', response.token);
    } else {
      localStorage.clear();
    }
  }
}
