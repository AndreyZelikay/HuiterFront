import {Tag} from '../models/Tag';

export class TwitCreateForm {
  tags: Tag[];
  body: string;
  base64Photos: string[];
}
