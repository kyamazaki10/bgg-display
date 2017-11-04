import { Component, Input } from '@angular/core';

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

  onSort($event) {
    return this.bggService.sortResponse(this.user.collection, $event);
  }

  getCollection(user: string) {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    return this.bggService.userCollection(user, sortDefault);
  }
}