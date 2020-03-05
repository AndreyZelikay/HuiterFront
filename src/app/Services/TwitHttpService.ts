import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Twit} from '../Models/Twit';
import {Comment} from '../Models/Comment';

@Injectable()
export class TwitHttpService {

  baseUrl = 'http://localhost:8080/Huiter_war/twit';

  constructor(private client: HttpClient) {}

}
