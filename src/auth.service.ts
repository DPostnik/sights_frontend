import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface IUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: IUser): Observable<any>
  {
    return this.http.post(`http://localhost:3000/auth/login`, user)
      .pipe(
        tap(this.setToken),
      )
  }

  private setToken(response: any | null): void {
    if (response) {
      localStorage.setItem('token-id', response.token);
      localStorage.setItem('username', response.username);
    }
    else{
      localStorage.clear()
    }
  }
}
