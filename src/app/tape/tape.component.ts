import { Component, OnInit } from '@angular/core';
import {Twit} from '../Models/Twit';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {

  twits: Twit[] = [{
    body: 'body',
    topic: 'topic',
    tags: [{
      body: 'OMG',
      twits: null
    }],
    comments: [{
      body: 'body',
      owner: {
        name: 'andrey',
        password: null,
        status: 'USER',
        base64Img: null,
        tags: null
      },
      twit: null
    }],
    date: new Date(),
    likes: 10,
    dislikes: 10,
    owner: {
      name: 'andrey',
      password: null,
      status: 'USER',
      base64Img: null,
      tags: null
    }
  }];

  ngOnInit() {}

}
