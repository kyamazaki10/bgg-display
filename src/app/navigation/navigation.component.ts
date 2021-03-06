import { Component } from '@angular/core';

import { SearchComponent } from './../search/search.component';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  providers: [ SearchComponent ]
})
export class NavigationComponent {
  title = 'BGG Display';

  constructor(
    private searchComponent: SearchComponent
  ) { }

  search(user: string): void {
    this.searchComponent.search(user);
  }
}