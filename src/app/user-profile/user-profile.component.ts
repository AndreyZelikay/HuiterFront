import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../services/UserHttpService';
import {User} from '../models/User';
import {UserDataProvider} from '../providers/UserDataProvider';
import {Router} from '@angular/router';
import {Twit} from '../models/Twit';
import {TwitHttpService} from '../services/TwitHttpService';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css', '../app.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private userHttpService: UserHttpService,
              private userDataProvider: UserDataProvider,
              private router: Router,
              private twitHttpService: TwitHttpService) {
  }

  ngOnInit() {
      this.userHttpService.getUser().subscribe((data) => {
        this.user = data;
        this.user.twits.forEach(twit => twit.owner = this.user);
      });
  }

  onLogOutClick() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onTwitDeleteClick(twit: Twit) {
    this.twitHttpService.deleteTwit(twit.id).subscribe((resp) => {
      if (resp.status === 200) {
        this.user.twits.splice(this.user.twits.indexOf(twit), 1);
      }
    });
  }
}
