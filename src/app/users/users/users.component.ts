import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ],
  providers: [ User ]
})
export class UsersComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = {
        id: params['user'],
        collection: null
      }
    });
  }
}
