import { Component, OnInit } from '@angular/core';
import {Twit} from '../Models/Twit';
import {TapeHttpService} from '../Services/TapeHttpService';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {

  twits: Twit[];
  showFilters = false;
  showButtonSeeMore = true;

  constructor(private tapeHttpService: TapeHttpService) {}

  ngOnInit() {
    this.tapeHttpService.getTwitsInInterval( 0, 10).subscribe(data => this.twits = data);
  }

  seeMore() {
    const from = this.twits.length;
    const to = from + 10;
    this.tapeHttpService.getTwitsInInterval( from, to).subscribe(data => {
      if (data.length < 10) {
        this.showButtonSeeMore = false;
      }
      this.twits = this.twits.concat(data);
    });
  }
}
