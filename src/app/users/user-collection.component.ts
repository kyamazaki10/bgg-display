import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { BggService } from './../shared/services/bgg.service';
import { User } from './user';
import { UserDataPipe } from './user-data.pipe';

@Component({
  selector: 'users',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent implements OnInit {
  user: User;
  private userId: string;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  onSort($event) {
    return this.bggService.sortResponse(this.user.collection, $event);
  }

  ngOnInit(): void {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('user');
        return this.bggService.userCollection(this.userId, sortDefault);
      })
      .subscribe(userCollection => {
        this.user = {
          id: this.userId,
          collection: userCollection
        };
      });
  }
}