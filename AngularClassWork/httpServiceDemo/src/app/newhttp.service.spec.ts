import { TestBed, inject } from '@angular/core/testing';

import { NewhttpService } from './newhttp.service';

describe('NewhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewhttpService]
    });
  });

  it('should be created', inject([NewhttpService], (service: NewhttpService) => {
    expect(service).toBeTruthy();
  }));
});
