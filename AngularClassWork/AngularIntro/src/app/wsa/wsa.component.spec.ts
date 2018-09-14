import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsaComponent } from './wsa.component';

describe('WsaComponent', () => {
  let component: WsaComponent;
  let fixture: ComponentFixture<WsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
