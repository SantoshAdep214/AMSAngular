import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllServicesComponent } from './admin-get-all-services.component';

describe('AdminGetAllServicesComponent', () => {
  let component: AdminGetAllServicesComponent;
  let fixture: ComponentFixture<AdminGetAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAllServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
