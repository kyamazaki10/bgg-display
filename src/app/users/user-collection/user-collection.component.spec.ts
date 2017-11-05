import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserCollectionComponent } from './user-collection.component';
import { UserDataPipe } from './../user-data.pipe';
import { UserNavigationComponent } from './../user-navigation/user-navigation.component';
import { UserService } from './../../shared/services/user.service';

describe('UserCollectionComponent', () => {
  let component: UserCollectionComponent;
  let fixture: ComponentFixture<UserCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserCollectionComponent,
        UserDataPipe,
        UserNavigationComponent
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
    fixture = TestBed.createComponent(UserCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
