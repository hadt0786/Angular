import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeGUIComponent } from './pipe-gui.component';

describe('PipeGUIComponent', () => {
  let component: PipeGUIComponent;
  let fixture: ComponentFixture<PipeGUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeGUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeGUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
