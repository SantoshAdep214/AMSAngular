import { TestBed } from '@angular/core/testing';

import { AMSCustomerService } from './amscustomer.service';

describe('AMSCustomerService', () => {
  let service: AMSCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AMSCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
