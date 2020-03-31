import {Twit} from './Twit';
import {Photo} from './Photo';

export class User {
  id: number;
  twits: Twit[];
  name: string;
  password: string;
  status: string;
  userPhoto: Photo;
}
