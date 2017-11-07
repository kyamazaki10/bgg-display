import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../users/user';

@Injectable()
export class UserService {
  user: User;

  constructor(
    private route: ActivatedRoute
  ) { }

  getUser(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.user = {
        id: params['user'],
        collection: null,
        plays: null
      }
    });

    return this.user;
  }
}