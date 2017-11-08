import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = (this.user) ? this.userService.user : this.userService.getUser(this.route);
    this.getCollection(this.user.id);
  }

  getCollection(userId: string): void {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    this.bggService.userCollection(userId, sortDefault)
      .then(collection => this.user.collection = collection);
  }

  onSort($event) {
    return this.bggService.sortResponse(this.user.collection, $event);
  }
}