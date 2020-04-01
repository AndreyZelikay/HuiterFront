import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Twit} from '../Models/Twit';
import {UserHttpService} from '../Services/UserHttpService';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  @Input() twit: Twit;
  @Input() userName: string;
  @Output() event = new EventEmitter();

  constructor(private userHttpService: UserHttpService) {
  }

  ngOnInit() {}
}
