import { Component, OnInit } from '@angular/core';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-plays',
  templateUrl: './user-plays.component.html',
  styleUrls: ['./user-plays.component.css']
})
export class UserPlaysComponent implements OnInit {
  user: User;

  constructor(
    private bggService: BggService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  getPlays() {
    
  }
}
