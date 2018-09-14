import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFirstService.Service.TsComponent } from './ecommerce-first-service.service.ts.component';

describe('EcommerceFirstService.Service.TsComponent', () => {
  let component: EcommerceFirstService.Service.TsComponent;
  let fixture: ComponentFixture<EcommerceFirstService.Service.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceFirstService.Service.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceFirstService.Service.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
