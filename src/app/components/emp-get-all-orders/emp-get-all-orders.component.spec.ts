import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetAllOrdersComponent } from './emp-get-all-orders.component';

describe('EmpGetAllOrdersComponent', () => {
  let component: EmpGetAllOrdersComponent;
  let fixture: ComponentFixture<EmpGetAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGetAllOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGetAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
