import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twit} from '../Models/Twit';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TapeHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {
  }

  getTwits(from: number, to: number, fromDate: Date, untilDate: Date, ownerName: string, tags: string): Observable<Twit[]> {
    const params = new HttpParams().set('from', from.toString())
      .set('to', to.toString())
      .set('fromDate', (fromDate != null) ? fromDate.toUTCString() : '')
      .set('untilDate', (untilDate != null) ? untilDate.toUTCString() : '')
      .set('ownerName', (ownerName != null) ? ownerName : '')
      .set('tags', (tags != null) ? tags : '');
    return this.client.get<Twit[]>(this.baseUrl + '/getTwits', {params});
  }
}
