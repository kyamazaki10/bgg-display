import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-plays',
  templateUrl: './user-plays.component.html'
})
export class UserPlaysComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = (this.user) ? this.userService.user : this.userService.getUser(this.route);
    this.getPlays(this.user.id);
  }

  getPlays(userId: string): void {
    this.bggService.userPlays(userId)
      .then(plays => this.user.plays = plays.plays.play);
  }

  onSort($event) {
    return this.bggService.sortResponse(this.user.plays, $event);
  }
}