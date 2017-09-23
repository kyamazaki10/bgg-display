import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
}

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

    <div *ngIf="selectedUser">
      <h2>{{selectedUser.name}} details</h2>
      <div>
        <label>id: </label>
        {{selectedUser.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedUser.name" placeholder="name">
      </div>
    </div>
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
