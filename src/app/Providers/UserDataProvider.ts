import {Injectable} from '@angular/core';
import {User} from '../Models/User';

@Injectable()
export class UserDataProvider {

  public storage: User;

  constructor() {
  }
}
