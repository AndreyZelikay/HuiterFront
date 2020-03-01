import {Tag} from './Tag';
import {Comment} from './Comment';
import {User} from './User';

export class Twit {
  body: string;
  topic: string;
  tags: Tag[];
  comments: Comment[];
  date: Date;
  owner: User;
  likes: number;
  dislikes: number;
}
