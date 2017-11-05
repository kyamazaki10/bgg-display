import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserNavigationComponent } from './user-navigation.component';
import { UserService } from './../../shared/services/user.service';

describe('UserNavigationComponent', () => {
  let component: UserNavigationComponent;
  let fixture: ComponentFixture<UserNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavigationComponent ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
