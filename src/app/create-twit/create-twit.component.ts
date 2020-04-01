import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-twit',
  templateUrl: './create-twit.component.html',
  styleUrls: ['./create-twit.component.css', '../app.component.css']
})
export class CreateTwitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogOutClick() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
