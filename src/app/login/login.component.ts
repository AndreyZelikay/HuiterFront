import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserHttpService} from '../Services/UserHttpService';
import {Router} from '@angular/router';
import {UserDataProvider} from '../Providers/UserDataProvider';
import {User} from '../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  invalidUser = false;

  constructor(private userHttpService: UserHttpService,
              private router: Router,
              private userDataProvider: UserDataProvider) {
  }

  ngOnInit() {
  }

  loginUser() {
    if (this.loginForm.valid) {
      const userToLogIn = {
        name: this.loginForm.get('name').value,
        password: this.loginForm.get('password').value
      };
      this.userHttpService.loginUser(userToLogIn).subscribe(
        (resp) => {
          localStorage.setItem('token', resp.headers.get('token'));
          this.userDataProvider.storage = resp.body;
          this.router.navigate(['/tape']);
        },
        (error) => {
          if (error.status === 403) {
            this.invalidUser = true;
            this.loginForm.markAsTouched();
          }
        });
    } else {
      this.loginForm.get('name').markAsTouched();
      this.loginForm.get('password').markAsTouched();
    }
  }

}
