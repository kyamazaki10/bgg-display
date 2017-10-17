import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class SortTableService {
  private columnSortSource = new Subject<ColumnSortEvent>();

  columnSort$ = this.columnSortSource.asObservable();

  columnSort(event: ColumnSortEvent) {
    this.columnSortSource.next(event);
  }
}

export interface ColumnSortEvent {
  sortColumn: string;
  sortDirection: string;
}