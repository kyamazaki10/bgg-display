import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { BggService } from './../shared/services/bgg.service';
import { UserDataPipe } from './user-data.pipe';

@Component({
  selector: 'users',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent implements OnInit {
  private user: string;
  private userCollection: any;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  onSort($event) {
    return this.bggService.sortResponse(this.userCollection, $event);
  }

  ngOnInit(): void {
    const sortDefault = {
      sortColumn: 'game',
      sortDirection: 'asc'
    };

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.user = params.get('user');
        return this.bggService.userCollection(this.user, sortDefault);
      })
      .subscribe(userCollection => this.userCollection = userCollection);
  }
}