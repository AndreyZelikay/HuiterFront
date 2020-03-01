import {Component, Input, OnInit} from '@angular/core';
import {Twit} from '../Models/Twit';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  @Input()twit: Twit;
  showComments = false;

  constructor() { }

  ngOnInit() {
  }

  initializeValue(twit: Twit) {
     this.twit = twit;
  }
}
