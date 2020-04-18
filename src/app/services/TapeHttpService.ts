import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twit} from '../models/Twit';
import {Injectable} from '@angular/core';
import {TwitSearchForm} from '../forms/TwitSearchForm';

@Injectable({
  providedIn: 'root'
})
export class TapeHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {
  }

  getTwits(twitSearchFrom: TwitSearchForm): Observable<Twit[]> {
    return this.client.post<Twit[]>(this.baseUrl + '/getTwits', twitSearchFrom);
  }
}
