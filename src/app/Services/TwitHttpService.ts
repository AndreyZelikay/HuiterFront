import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Twit} from '../Models/Twit';
import {Comment} from '../Models/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {}

  deleteTwit(twitId: number): Observable<HttpResponse<any>> {
    const params = new HttpParams().set('id', String(twitId));
    return this.client.delete<any>(this.baseUrl + '/delete', {params, observe: 'response'});
  }
}
