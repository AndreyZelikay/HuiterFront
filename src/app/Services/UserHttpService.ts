import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private httpClient: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/Huiter_war/user';
  token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJJc3N1ZXIiLCJzdWIiOiJ7XCJpZFwiOjc' +
    'sXCJuYW1lXCI6XCJBbmRyZWlcIn0ifQ.aJpJufHx4HYVbKTHn5muYPGf_rBkB152r15A0N0lozc';

  getUser(): Observable<User> {
    const headers = new HttpHeaders().set('token', this.token);
    return this.httpClient.get<User>(this.baseUrl + '/getUser', {headers});
  }
}
