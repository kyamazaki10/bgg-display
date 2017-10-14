import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BggSortTableService } from './bgg-sort-table.service';

@Component({
  selector: '[sort-column]',
  templateUrl: './bgg-sort-table-column.component.html'
})
export class BggSortTableColumn implements OnInit, OnDestroy {
  columnSortSubscription: Subscription;

  constructor(
    private bggSortTableService: BggSortTableService
  ) { }

  @Input('sort-column')
  sortColumn: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.bggSortTableService.columnSorted({
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection
    });
  }

  ngOnInit() {
    this.columnSortSubscription = this.bggSortTableService.columnSorted$.subscribe(event => {
      if (this.sortColumn !== event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortSubscription.unsubscribe();
  }
}
