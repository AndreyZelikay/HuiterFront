import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Twit} from '../Models/Twit';
import {Observable} from 'rxjs';

@Injectable()
export class CommentHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/comment';

  constructor(private client: HttpClient) {}

  getComments(twit: Twit): Observable<Comment[]> {
    const params = new HttpParams();
    params.append('id', twit.id.toString());
    return this.client.get<Comment[]>(this.baseUrl + '/getComments', {params});
  }
}
