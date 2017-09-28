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

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService.delete(user.id)
      .then(() => {
        this.users = this.users.filter(u => u !== user);
        if (this.selectedUser === user) {
          this.selectedUser = null;
        }
      })
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
