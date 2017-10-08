import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BggService } from './bgg.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'bgg-users',
  templateUrl: './bgg-users.component.html',
  styleUrls: [ './bgg-users.component.css' ]
})

export class BggUsersComponent implements OnInit {
  private bggUserCollection: any;

  constructor(
    private route: ActivatedRoute,
    private bggService: BggService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.bggService.userCollection(params.get('user')))
      .subscribe(bggUserCollection => this.bggUserCollection = bggUserCollection.item);
  }
}