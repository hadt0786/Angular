import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasecomponentComponent } from './firebasecomponent.component';

describe('FirebasecomponentComponent', () => {
  let component: FirebasecomponentComponent;
  let fixture: ComponentFixture<FirebasecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
