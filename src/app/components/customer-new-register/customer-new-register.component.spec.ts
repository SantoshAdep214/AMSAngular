import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewRegisterComponent } from './customer-new-register.component';

describe('CustomerNewRegisterComponent', () => {
  let component: CustomerNewRegisterComponent;
  let fixture: ComponentFixture<CustomerNewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNewRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
