import { TestBed } from '@angular/core/testing';

import { AMSEmployeeService } from './amsemployee.service';

describe('AMSEmployeeService', () => {
  let service: AMSEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AMSEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
