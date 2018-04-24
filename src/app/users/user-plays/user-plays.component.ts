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
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = (this.userService.user) ? this.userService.user : this.userService.getUser(this.route);
    this.user.plays = (this.user.plays) ? this.user.plays : this.getPlays();
  }

  getPlays(): void {
    this.bggService.userPlays(this.user.id)
      .then(plays => (plays) ? this.user.plays = plays : this.error = true);
  }

  onSort($event) {
    return this.bggService.sortResponse(this.user.plays, $event);
  }
}