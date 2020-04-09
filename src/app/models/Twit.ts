import {Tag} from './Tag';
import {Comment} from './Comment';
import {User} from './User';
import {Photo} from './Photo';

export class Twit {
  id: number;
  body: string;
  tags: Tag[];
  comments: Comment[];
  date: Date;
  owner: User;
  likes: number;
  dislikes: number;
  photos: Photo[];
}
