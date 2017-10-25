import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'BGG Display'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BGG Display');
  }));

  it(`should render title inside the navbar`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav').textContent).toContain('BGG Display');
  }));

  it(`should contain a search bar`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-search')).toBeTruthy();
  }));

  // it(`should return an error when empty`, async(() => {
  //   spyOn(component, 'search');
  //   let searchButton = fixture.debugElement.nativeElement.querySelector('.nav-search button');
  //   searchButton.click();
  //   fixture.whenStable().then(() => {
  //     expect(component.search).toHaveBeenCalled();
  //   });
  // }));
});
