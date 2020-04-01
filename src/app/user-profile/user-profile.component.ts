import {Component, OnInit} from '@angular/core';
import {UserHttpService} from '../Services/UserHttpService';
import {User} from '../Models/User';
import {UserDataProvider} from '../Providers/UserDataProvider';
import {Router} from '@angular/router';
import {Twit} from '../Models/Twit';
import {TwitHttpService} from '../Services/TwitHttpService';

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
    if (this.userDataProvider.storage != null) {
      this.user = this.userDataProvider.storage;
    } else {
      this.userHttpService.getUser().subscribe((data) => {
        this.user = data;
        this.user.twits.forEach(twit => twit.owner = this.user);
      });
    }
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
