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

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.bggUser = params.get('user');
        return this.bggService.userCollection(this.bggUser);
      })
      .subscribe(bggUserCollection => this.bggUserCollection = bggUserCollection.item);
  }
}