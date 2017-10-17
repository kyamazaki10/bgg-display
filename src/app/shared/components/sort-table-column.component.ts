import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortTableService } from './../services/sort-table.service';

@Component({
  selector: '[sort-column]',
  templateUrl: './sort-table-column.component.html',
  styleUrls: [ './sort-table-column.component.css' ]
})
export class SortTableColumnComponent implements OnInit, OnDestroy {
  private columnSortSubscription: Subscription;

  constructor(
    private sortTableService: SortTableService
  ) { }

  @Input('sort-column')
  sortColumn: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortTableService.columnSort({
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection
    });
  }

  ngOnInit() {
    this.columnSortSubscription = this.sortTableService.columnSort$.subscribe(event => {
      if (this.sortColumn !== event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortSubscription.unsubscribe();
  }
}
