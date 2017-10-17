import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTableColumnComponent } from './sort-table-column.component';

describe('SortTableColumnComponent', () => {
  let component: SortTableColumnComponent;
  let fixture: ComponentFixture<SortTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
