import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaysComponent } from './user-plays.component';

describe('UserPlaysComponent', () => {
  let component: UserPlaysComponent;
  let fixture: ComponentFixture<UserPlaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
