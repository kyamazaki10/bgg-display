import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BggService } from './../../shared/services/bgg.service';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserNavigationComponent } from './../user-navigation/user-navigation.component';
import { UserService } from './../../shared/services/user.service';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDashboardComponent,
        UserNavigationComponent
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        NgxChartsModule,
        RouterTestingModule
      ],
      providers: [
        BggService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
