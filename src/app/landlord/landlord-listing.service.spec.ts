import { TestBed } from '@angular/core/testing';

import { LandlordService } from './landlord-listing.service';

describe('LandlordService', () => {
  let service: LandlordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandlordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
