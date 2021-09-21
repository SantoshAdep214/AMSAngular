import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCarsComponent } from './insert-cars.component';

describe('InsertCarsComponent', () => {
  let component: InsertCarsComponent;
  let fixture: ComponentFixture<InsertCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
