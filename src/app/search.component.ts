import { Component } from '@angular/core';

import { BggService } from './bgg.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ BggService ]
})

export class SearchComponent {
  constructor(
    private bggService: BggService
  ) { }

  search(user: string): void {
    this.bggService.search(user);
  }
}