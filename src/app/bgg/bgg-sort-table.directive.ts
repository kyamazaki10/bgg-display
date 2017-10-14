import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BggSortTableService } from './bgg-sort-table.service';

@Directive({
  selector: '[sort-table]'
})

export class BggSortTableDirective implements OnInit, OnDestroy {

  private columnSortedSubscription: Subscription;

  constructor(
    private bggSortTableService: BggSortTableService
  ) { }

  @Output()
  sorted = new EventEmitter();

  ngOnInit() {
    this.columnSortedSubscription = this.bggSortTableService.columnSorted$.subscribe(event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
