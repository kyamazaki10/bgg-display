import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BggSortTableColumn } from './bgg-sort-table-column.component';

describe('BggSortTableColumn', () => {
  let component: BggSortTableColumn;
  let fixture: ComponentFixture<BggSortTableColumn>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BggSortTableColumn ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BggSortTableColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
