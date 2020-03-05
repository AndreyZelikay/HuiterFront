import {Component, Input, OnInit} from '@angular/core';
import {Twit} from '../Models/Twit';
import {Tag} from '../Models/Tag';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  @Input()twit: Twit;
  showComments = false;
  tagString: string;

  constructor() { }

  ngOnInit() {}

  initializeValue(twit: Twit) {
     this.twit = twit;
  }
}
