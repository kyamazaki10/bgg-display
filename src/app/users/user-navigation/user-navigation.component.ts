import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { User } from './../user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: [ './user-navigation.component.css' ]
})
export class UserNavigationComponent implements OnInit, OnDestroy {
  @Input() user: User;

  private active: any;

  constructor(
    public userService: UserService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const path = this.location.path().split('/')[3];

    this.active = { [path]: true };
  }

  ngOnDestroy(): void {
    this.userService.user = this.user;
  }

  navigate(user: User, path: string): void {
    this.router.navigate(['users', this.user.id, path]);
  }
}