import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BggService } from './bgg.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'bgg-users',
  templateUrl: './bgg-user-collection.component.html',
  styleUrls: [ './bgg-user-collection.component.css' ]
})

export class BggUserCollectionComponent implements OnInit {
  bggUser: string;
  bggUserCollection: any;

  sortDefault = {
    sortColumn: 'game',
    sortDirection: 'asc'
  }

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  onSorted($event) {
    return this.bggService.sortResponse(this.bggUserCollection, $event);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.bggUser = params.get('user');
        return this.bggService.userCollection(this.bggUser, this.sortDefault);
      })
      .subscribe(bggUserCollection => this.bggUserCollection = bggUserCollection);
  }
}