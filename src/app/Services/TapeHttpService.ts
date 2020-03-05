import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twit} from '../Models/Twit';
import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';

@Injectable({
    providedIn: 'root'
  })
export class TapeHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {}

  getTwitsInInterval(from: number, to: number): Observable<Twit[]> {
    const params = new HttpParams().set('from', from.toString()).set('to', to.toString());
    return this.client.get<Twit[]>(this.baseUrl + '/getTwitsInInterval', {params});
  }
}
