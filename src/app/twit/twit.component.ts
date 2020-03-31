import {Component, Input, OnInit} from '@angular/core';
import {Twit} from '../Models/Twit';
import {CommentHttpService} from '../Services/CommentHttpService';
import {Comment} from '../Models/Comment';

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
