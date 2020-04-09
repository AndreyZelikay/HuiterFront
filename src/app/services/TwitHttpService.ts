import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TwitCreateForm} from '../forms/TwitCreateForm';
import {Twit} from '../models/Twit';
import {TwitUpdateForm} from '../forms/TwitUpdateForm';

@Injectable({
  providedIn: 'root'
})
export class TwitHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {
  }


  getTwit(twitId: number): Observable<Twit> {
    const params = new HttpParams().set('id', String(twitId));
    return this.client.get<Twit>(this.baseUrl + '/get', {params});
  }

  deleteTwit(twitId: number): Observable<HttpResponse<any>> {
    const params = new HttpParams().set('id', String(twitId));
    return this.client.delete<any>(this.baseUrl + '/delete', {params, observe: 'response'});
  }

  postTwit(twit: TwitCreateForm): Observable<HttpResponse<any>> {
    return this.client.post<any>(this.baseUrl + '/create', twit, {observe: 'response'});
  }

  updateTwit(twit: TwitUpdateForm): Observable<HttpResponse<any>> {
    return this.client.put<any>(this.baseUrl + '/update', twit, {observe: 'response'});
  }

}

