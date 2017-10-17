import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { BggService } from './../shared/services/bgg.service';

@Component({
  selector: 'users',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent implements OnInit {
  private user: string;
  private userCollection: any;
  private sortDefault = {
    sortColumn: 'game',
    sortDirection: 'asc'
  }

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  onSort($event) {
    return this.bggService.sortResponse(this.userCollection, $event);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.user = params.get('user');
        return this.bggService.userCollection(this.user, this.sortDefault);
      })
      .subscribe(userCollection => this.userCollection = userCollection);
  }
}