import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserNavigationComponent } from './../user-navigation/user-navigation.component';
import { UserPlaysComponent } from './user-plays.component';
import { UserService } from './../../shared/services/user.service';

describe('UserPlaysComponent', () => {
  let component: UserPlaysComponent;
  let fixture: ComponentFixture<UserPlaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserNavigationComponent,
        UserPlaysComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        BggService,
        User,
        UserService
      ]
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
