import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortTableService } from './../services/sort-table.service';

@Directive({
  selector: '[sort-table]'
})
export class SortTableDirective implements OnInit, OnDestroy {
  private columnSortedSubscription: Subscription;

  constructor(
    private sortTableService: SortTableService
  ) { }

  @Output()
  sorted = new EventEmitter();

  ngOnInit() {
    this.columnSortedSubscription = this.sortTableService.columnSorted$.subscribe(event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
