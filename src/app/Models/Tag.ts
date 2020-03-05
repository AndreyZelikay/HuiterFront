import {Twit} from './Twit';

export class Tag {
  body: string;
  twits: Twit[];

  public toString = (): string => {
    return this.body;
  }
}
