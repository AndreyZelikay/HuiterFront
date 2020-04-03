import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tag} from '../Models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/tag';

  constructor(private client: HttpClient) {
  }

  getTags(startingWith: string): Observable<Tag[]> {
    const params = new HttpParams().set('startingWith', startingWith);
    return this.client.get<Tag[]>(this.baseUrl + '/getTags', {params});
  }
}
