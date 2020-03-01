import {User} from './User';
import {Twit} from './Twit';

export class Comment {
  body: string;
  owner: User;
  twit: Twit;
}
