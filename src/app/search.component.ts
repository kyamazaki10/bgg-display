import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent {
  error: string;

  constructor(
    private router: Router
  ) { }

  search(user: string): void {
    user !== '' ? this.router.navigate(['users', user, 'collection']) : this.showError();
  }

  showError(): void {
    this.error = 'Please enter a username.';
  }
}