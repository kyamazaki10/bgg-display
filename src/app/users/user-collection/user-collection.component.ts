import { Component, Input, OnChanges } from '@angular/core';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';

@Component({
  selector: 'user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  @Input() user: User;

  constructor(
    user: User,
    private bggService: BggService
  ) { }

  ngOnChanges(user: User): void {
    this.getCollection(this.user.id);
  }

  onSort($event) {
    return this.bggService.sortResponse(this.user.collection, $event);
  }

  getCollection(user: string): void {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    this.bggService.userCollection(user, sortDefault)
      .then(collection => this.user.collection = collection);
  }
}