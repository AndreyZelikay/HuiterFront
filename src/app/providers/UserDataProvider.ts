import {Injectable} from '@angular/core';
import {User} from '../models/User';

@Injectable()
export class UserDataProvider {

  public storage: User;

  constructor() {
  }
}
