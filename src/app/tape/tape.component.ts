import {Component, OnInit} from '@angular/core';
import {Twit} from '../models/Twit';
import {TapeHttpService} from '../services/TapeHttpService';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserDataProvider} from '../providers/UserDataProvider';
import {UserHttpService} from '../services/UserHttpService';
import {TwitSearchForm} from '../forms/TwitSearchForm';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css', '../app.component.css']
})
export class TapeComponent implements OnInit {

  twits: Twit[];
  showFilters = false;
  showButtonSeeMore = true;
  tags: string;
  currentUserName: string;
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    untilDate: new FormControl(),
    ownerName: new FormControl()
  });

  constructor(private tapeHttpService: TapeHttpService,
              private router: Router,
              private userDataProvider: UserDataProvider,
              private userHttpService: UserHttpService) {
  }

  ngOnInit() {
    this.onSearch();
    if (this.userDataProvider.storage != null) {
      this.currentUserName = this.userDataProvider.storage.name;
    } else {
      this.userHttpService.getUser().subscribe((data) => this.currentUserName = data.name);
    }
  }

  seeMore() {
    this.search().subscribe((data) => {
      this.twits = this.twits.concat(data);
      this.showButtonSeeMore = data.length >= 10;
    });
  }

  onSearch() {
    this.search().subscribe((data) => {
      this.twits = data;
      this.showButtonSeeMore = data.length >= 10;
    });
  }

  onLogOutClick() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private search(): Observable<Twit[]> {
    const twitSearchForm: TwitSearchForm = {
      skip: (this.twits != null) ? this.twits.length : 0,
      top: 10,
      ownerName:  this.filterForm.get('ownerName').value,
      fromDate: this.filterForm.get('fromDate').value,
      untilDate: this.filterForm.get('untilDate').value,
      tags: (this.tags != null) ? this.tags.split(' ') : []
    };
    return this.tapeHttpService.getTwits(twitSearchForm);
  }
}
