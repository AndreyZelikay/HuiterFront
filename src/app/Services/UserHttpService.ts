import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserHttpService {
  constructor(private httpClient: HttpClient) {}
}
