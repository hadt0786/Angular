import { TestBed, inject } from '@angular/core/testing';

import { ZodiacserviceService } from './zodiacservice.service';

describe('ZodiacserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZodiacserviceService]
    });
  });

  it('should be created', inject([ZodiacserviceService], (service: ZodiacserviceService) => {
    expect(service).toBeTruthy();
  }));
});
