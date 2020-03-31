import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {LoginForm} from '../Forms/LoginForm';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private httpClient: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/Huiter_war/user';

  getUser(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + '/getUser');
  }

  loginUser(loginForm: LoginForm): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.baseUrl + '/login', loginForm, { observe: 'response' });
  }
}
