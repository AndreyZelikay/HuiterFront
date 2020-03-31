import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Twit} from '../Models/Twit';
import {Observable} from 'rxjs';
import {Comment} from '../Models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/comment';

  constructor(private client: HttpClient) {}

  getComments(twit: Twit): Observable<Comment[]> {
    const params = new HttpParams().set('id', twit.id.toString());
    return this.client.get<Comment[]>(this.baseUrl + '/getComments', {params});
  }

  createComment(comment: Comment): Observable<Comment[]> {
    const commentJson = JSON.stringify({body: comment.body,
    twit: {id: comment.twit.id} });
    return this.client.post<Comment[]>(this.baseUrl + '/create', commentJson);
  }
}
