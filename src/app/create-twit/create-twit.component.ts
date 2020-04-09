import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TagHttpService} from '../services/TagHttpService';
import {ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {TwitHttpService} from '../services/TwitHttpService';
import {TwitCreateForm} from '../forms/TwitCreateForm';
import {Tag} from '../models/Tag';
import {TwitUpdateForm} from '../forms/TwitUpdateForm';

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css', '../app.component.css']
})
export class CreateTwitComponent implements OnInit {

  isRefactoring = false;
  twitId: number;
  enterCode: number = ENTER;
  body: string;
  tags: string[] = [];
  currentTag = '';
  availableTags: Tag[] = [];

  constructor(private router: Router,
              private tagHttpService: TagHttpService,
              private twitHttpService: TwitHttpService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id != null) {
      this.twitHttpService.getTwit(id).subscribe((twit) => {
        this.body = twit.body;
        this.twitId = twit.id;
        this.tags = twit.tags.map<string>(value => value.body);
        this.isRefactoring = true;
      });
    }
    this.onInput();
  }

  onInput() {
    this.tagHttpService.getTags(this.currentTag || '', 0, 5)
      .subscribe((data) => this.availableTags = data);
  }

  postTwit() {
    const twit: TwitCreateForm = {
      body: this.body,
      tags: this.tags.map<Tag>(value => {
        return {
          id: null,
          body: value,
          searchCounter: null
        };
      })
    };
    this.twitHttpService.postTwit(twit).subscribe((resp) => {
      if (resp.status === 200) {
        this.router.navigate(['/profile']);
      }
      console.log('resp');
    });
  }

  updateTwit() {
    const twit: TwitUpdateForm = {
      id: this.twitId,
      body: this.body,
      tags: this.tags.map<Tag>(value => {
        return {
          id: null,
          body: value,
          searchCounter: null
        };
      })
    };
    this.twitHttpService.updateTwit(twit).subscribe((resp) => {
      if (resp.status === 200) {
        this.router.navigate(['/profile']);
      }
      console.log('resp');
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;

    if ((this.currentTag || '').trim()) {
      this.tags.push(this.currentTag);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.currentTag = null;
    this.tags.push(event.option.viewValue);
  }

}
