import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetAllCustomerComponent } from './emp-get-all-customer.component';

describe('EmpGetAllCustomerComponent', () => {
  let component: EmpGetAllCustomerComponent;
  let fixture: ComponentFixture<EmpGetAllCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGetAllCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGetAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
