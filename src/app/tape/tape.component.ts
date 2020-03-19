import {Component, OnInit} from '@angular/core';
import {Twit} from '../Models/Twit';
import {TapeHttpService} from '../Services/TapeHttpService';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {

  twits: Twit[];
  showFilters = false;
  showButtonSeeMore = true;
  tags: string;
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    untilDate: new FormControl(),
    ownerName: new FormControl()
  });

  constructor(private tapeHttpService: TapeHttpService) {
  }

  ngOnInit() {
    this.tapeHttpService.getTwits(0, 10,
      this.filterForm.get('fromDate').value,
      this.filterForm.get('untilDate').value,
      this.filterForm.get('ownerName').value,
      this.tags).subscribe(data => this.twits = data);
  }

  seeMore() {
    const from = this.twits.length;
    const to = from + 10;
    this.tapeHttpService.getTwits(0, 10,
      this.filterForm.get('fromDate').value,
      this.filterForm.get('untilDate').value,
      this.filterForm.get('ownerName').value,
      this.tags).subscribe(data => {
      if (data.length < 10) {
        this.showButtonSeeMore = false;
      }
      this.twits = this.twits.concat(data);
    });
  }

  search() {
    this.tapeHttpService.getTwits(0, 10,
      this.filterForm.get('fromDate').value,
      this.filterForm.get('untilDate').value,
      this.filterForm.get('ownerName').value,
      this.tags).subscribe(data => this.twits = data);
  }
}
