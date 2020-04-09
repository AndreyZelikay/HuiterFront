import {Component, Input, OnInit} from '@angular/core';
import {Twit} from '../models/Twit';
import {CommentHttpService} from '../services/CommentHttpService';
import {Comment} from '../models/Comment';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

  @Input() twit: Twit;
  showComments = false;
  tagString: string;
  @Input() currentUserName: string;
  @Input() showFeedBack = true;

  constructor(private commentHttpService: CommentHttpService) {
  }

  ngOnInit() {
    this.tagString = this.twit.tags.map((value) => {
      return '#' + value.body;
    }).join('');
  }

  onCommentsClick() {
    this.showComments = !this.showComments;
    if (this.showComments) {
      this.commentHttpService.getComments(this.twit).subscribe((data) => this.twit.comments = data);
    }
  }

  postComment(body: string) {
    const comment = new Comment();
    comment.twit = this.twit;
    if (body != null) {
      comment.body = body;
      this.commentHttpService.createComment(comment).subscribe((data) => this.twit.comments = data);
    }
  }
}
