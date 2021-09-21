import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetAllServicesComponent } from './emp-get-all-services.component';

describe('EmpGetAllServicesComponent', () => {
  let component: EmpGetAllServicesComponent;
  let fixture: ComponentFixture<EmpGetAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGetAllServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGetAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
