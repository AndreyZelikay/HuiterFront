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
  token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJJc3N1ZXIiLCJzdWIiOiJ7XCJpZFwiOjc' +
    'sXCJuYW1lXCI6XCJBbmRyZWlcIn0ifQ.aJpJufHx4HYVbKTHn5muYPGf_rBkB152r15A0N0lozc';

  constructor(private client: HttpClient) {}

  getComments(twit: Twit): Observable<Comment[]> {
    const params = new HttpParams().set('id', twit.id.toString());
    return this.client.get<Comment[]>(this.baseUrl + '/getComments', {params});
  }

  createComment(comment: Comment): Observable<Comment[]> {
    const headers = new HttpHeaders().set('token', this.token);
    const commentJson = JSON.stringify({body: comment.body,
    twit: {id: comment.twit.id} });
    return this.client.post<Comment[]>(this.baseUrl + '/create', commentJson, {headers});
  }
}
