import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortTableService } from './../services/sort-table.service';

@Directive({
  selector: '[sort-table]'
})
export class SortTableDirective implements OnInit, OnDestroy {
  private columnSortSubscription: Subscription;

  constructor(
    private sortTableService: SortTableService
  ) { }

  @Output()
  sort = new EventEmitter();

  ngOnInit() {
    this.columnSortSubscription = this.sortTableService.columnSort$.subscribe(event => {
      this.sort.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortSubscription.unsubscribe();
  }
}
