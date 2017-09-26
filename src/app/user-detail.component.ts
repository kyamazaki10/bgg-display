import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }
}