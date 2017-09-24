import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>List of Users</h2>
    <ul class="users">
      <li *ngFor="let user of users"
        (click)="onSelect(user)"
        [class.selected]="user === selectedUser">
        <span class="id">{{user.id}}</span>
        {{user.name}}</li>
    </ul>
    <user-detail [user]="selectedUser"></user-detail>
  `,
  //styleUrls: ['./app.component.css']
  styles: [`
    h1, h2 {
      font-weight: normal;
    }

    li.selected {
      color: #ff0000;
    }
  `],
  providers: [UserService]
})

export class AppComponent implements OnInit {
  title = 'BGG Display';
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
