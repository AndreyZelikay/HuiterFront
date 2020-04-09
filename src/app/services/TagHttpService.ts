import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tag} from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/tag';

  constructor(private client: HttpClient) {
  }

  getTags(startingWith: string, skip: number, top: number): Observable<Tag[]> {
    const params = new HttpParams()
      .set('startingWith', startingWith)
      .set('skip', skip.toString())
      .set('top', top.toString());
    return this.client.get<Tag[]>(this.baseUrl + '/getTags', {params});
  }
}
