import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  goToDetail(): void {
    this.router.navigate(['/users', this.selectedUser.id]);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
