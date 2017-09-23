import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>{{user.name}} details</h2>
    <div>
      <label>id: </label>
      {{user.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="user.name" placeholder="name">
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BGG Display';
  user: User = {
    id: 1,
    name: 'kmeeks'
  };
}
