import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFirstComponent.Component.TsComponent } from './ecommerce-first-component.component.ts.component';

describe('EcommerceFirstComponent.Component.TsComponent', () => {
  let component: EcommerceFirstComponent.Component.TsComponent;
  let fixture: ComponentFixture<EcommerceFirstComponent.Component.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceFirstComponent.Component.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceFirstComponent.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
