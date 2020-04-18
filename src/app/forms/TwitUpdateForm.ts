import {Tag} from '../models/Tag';

export class TwitUpdateForm {
  id: number;
  tags: Tag[];
  body: string;
  base64Photos: string[];
}
