import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGetAllCarsComponent } from './emp-get-all-cars.component';

describe('EmpGetAllCarsComponent', () => {
  let component: EmpGetAllCarsComponent;
  let fixture: ComponentFixture<EmpGetAllCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGetAllCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGetAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
