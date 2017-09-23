import { Component } from '@angular/core';
import { User } from './user';

const USERS: User[] = [
  { id: 11, name: 'kmeeks11' },
  { id: 12, name: 'kmeeks12' },
  { id: 13, name: 'kmeeks13' },
  { id: 14, name: 'kmeeks14' },
  { id: 15, name: 'kmeeks15' }
];

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
  `]
})

export class AppComponent {
  title = 'BGG Display';
  selectedUser: User;
  users = USERS;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
