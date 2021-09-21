import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewRegisterComponent } from './employee-new-register.component';

describe('EmployeeNewRegisterComponent', () => {
  let component: EmployeeNewRegisterComponent;
  let fixture: ComponentFixture<EmployeeNewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNewRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
