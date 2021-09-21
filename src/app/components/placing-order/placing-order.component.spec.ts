import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingOrderComponent } from './placing-order.component';

describe('PlacingOrderComponent', () => {
  let component: PlacingOrderComponent;
  let fixture: ComponentFixture<PlacingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacingOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
