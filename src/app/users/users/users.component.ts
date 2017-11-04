import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from './../user';
import { UserCollectionComponent } from './../user-collection/user-collection.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [
    User,
    UserCollectionComponent
  ]
})
export class UsersComponent implements OnInit {
  user: User;
  private userId: string;

  constructor(
    private route: ActivatedRoute,
    private userCollectionComponent: UserCollectionComponent
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.userId = params.get('user');
        return this.userCollectionComponent.getCollection(this.userId);
      })
      .subscribe(userCollection => {
        this.user = {
          id: this.userId,
          collection: userCollection
        };
      });
  }
}
