import { TestBed, inject } from '@angular/core/testing';

import { ListingService } from './listing.service';

describe('ListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingService]
    });
  });

  it('should ...', inject([ListingService], (service: ListingService) => {
    expect(service).toBeTruthy();
  }));
});
