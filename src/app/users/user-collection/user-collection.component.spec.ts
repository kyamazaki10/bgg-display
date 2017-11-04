import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BggService } from './../../shared/services/bgg.service';
import { User } from './../user';
import { UserCollectionComponent } from './user-collection.component';
import { UserDataPipe } from './../user-data.pipe';

describe('UserCollectionComponent', () => {
  let component: UserCollectionComponent;
  let fixture: ComponentFixture<UserCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserCollectionComponent,
        UserDataPipe
      ],
      imports: [
        HttpModule
      ],
      providers: [
        BggService,
        User
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
