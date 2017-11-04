import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BggService } from './../../shared/services/bgg.service';
import { UserDataPipe } from './../user-data.pipe';
import { UserNavigationComponent } from './../user-navigation/user-navigation.component';
import { UserPlaysComponent } from './../user-plays/user-plays.component';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDataPipe,
        UserNavigationComponent,
        UserPlaysComponent,
        UsersComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        ActivatedRoute,
        BggService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
