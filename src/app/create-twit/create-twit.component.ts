import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagHttpService} from '../Services/TagHttpService';
import {ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {TwitHttpService} from '../Services/TwitHttpService';
import {Twit} from '../Models/Twit';
import {TwitCreateForm} from '../Forms/TwitCreateForm';
import {Tag} from '../Models/Tag';

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css', '../app.component.css']
})
export class CreateTwitComponent implements OnInit {

  enterCode: number = ENTER;
  body: string;
  tags: string[] = [];
  currentTag: string;
  availableTags: string[] = [];

  constructor(private router: Router,
              private tagHttpService: TagHttpService,
              private twitHttpService: TwitHttpService) {
  }

  ngOnInit() {
    this.onInput();
  }

  onInput() {
    this.tagHttpService.getTags(this.currentTag)
      .subscribe((data) => data.sort(tag => tag.searchCounter).forEach(tag => this.availableTags.push(tag.body)));
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
    this.twitHttpService.postTwit(twit).subscribe((resp) => console.log(resp));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
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
    this.tags.push(event.option.viewValue);
  }

}
